import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Check for both OPENROUTER_API_KEY or GEMINI_API_KEY
    const rawApiKey = process.env.OPENROUTER_API_KEY || process.env.GEMINI_API_KEY;
    const apiKey = rawApiKey?.trim();

    // Check if the API key is configured. If not, return a helpful instruction.
    if (!apiKey) {
      return NextResponse.json({
        role: "model",
        parts: [{ text: "Hello! I am Divyanshu's AI assistant. 🚀\n\nTo enable me to answer your questions, please configure a free **`OPENROUTER_API_KEY`** or **`GEMINI_API_KEY`** in the project's environment variables (e.g. inside `.env.local` or Vercel dashboard)." }]
      });
    }

    // System prompt containing Divyanshu's profile information
    const systemPrompt = `You are the personal AI Assistant of Divyanshu Sharma, representing him on his portfolio website.
Speak in the first-person as Divyanshu ("I completed...", "My projects...", "During my internship...").
Maintain a friendly, professional, and enthusiastic tone. Keep your responses concise, clear, and relevant (typically 2-4 sentences, unless answering a complex query).
If asked about something outside your knowledge base or not related to Divyanshu's professional details, politely say you don't have that information and guide them to contact me via the contact form or email (sharmadivyanshu.ds@gmail.com).

Here are the facts about my career, education, skills, and background:

### PERSONAL STATEMENT
I work at the intersection of data, business, and artificial intelligence, transforming complex information into actionable insights and strategic decisions.

### EDUCATION
- **B.Tech in Computer Science (Data Science)**
  - UPES Dehradun, India (August 2022 - June 2026)
  - CGPA: 8.2 / 10.0
  - Completed in June 2026

### INTERNSHIPS & PROFESSIONAL EXPERIENCE
1. **DRDO - ISSA Lab (Defense Research and Development Organization)**
   - Role: Data Science Intern
   - Duration: June 2025 - July 2025
   - Location: Delhi, India (On-site)
   - Projects: Worked on "Bodhak AI" translating natural language questions into executable database queries. Integrated LangChain, Python, and SQL.
2. **IBM (International Business Machines)**
   - Role: Data Science Intern
   - Duration: June 2025 - July 2025
   - Location: Remote
   - Projects: Built a machine learning classifier predicting Titanic passenger survival using Python and scikit-learn.
   - **HOW I DID BOTH INTERNSHIPS AT THE SAME TIME (JUNE-JULY 2025):**
     Recruiters might be confused about how I did both. The DRDO internship was a fully on-site internship in Delhi, while the IBM internship was a remote, project-based internship. Since IBM was remote and project-based (independent hours), I worked on my DRDO onsite responsibilities during the day, and dedicated my evenings and weekends to complete the IBM data science deliverables. This allowed me to manage both successfully.
3. **CheckExplore Technologies**
   - Role: AI / ML Intern
   - Duration: April 2026 - July 2026
   - Location: Navi Mumbai, India (On-site)
   - Projects: Worked on AI and data projects to automate workflows. Handled analysis for Yokohama Tyre client and insurance business problems.
4. **IPM Management Services**
   - Role: Marketing Analyst Intern
   - Duration: April 2024 - Sept 2024
   - Location: Dehradun, India (Hybrid)
   - Projects: Analyzed ad campaigns using Power BI and Excel, monitored clicks and conversions.
5. **Aarohi Blood Centre**
   - Role: Campaign Analyst & Awareness Lead
   - Duration: June 2023 - July 2023
   - Projects: Led digital campaigns, analyzed audience engagement metrics.
6. **Aspiria Business Consulting**
   - Role: Business & Technology Consultant
   - Duration: 2022 - 2026 (Remote)
   - Projects: Advised 10+ small businesses on digital adoption, branding, SEO, and point-of-sale setups.

### KEY TECHNICAL PROJECTS
- **Bodhak AI Text-to-SQL Engine**: A Flask-based LLM conversational application using LangChain, Ollama, and MySQL.
- **Blinkit Sales Dashboard**: Interactive Power BI retail dashboard utilizing advanced DAX and SQL.
- **CampusConnect**: Full-stack Flask/MySQL smart networking platform with CAI assistant.
- **Titanic Survival Classifier**: Machine learning classification algorithms in Python.

### TECHNICAL SKILLS
- **Data Analytics**: SQL (MySQL/Postgres), Power BI, Advanced Excel, Tableau, Pandas, NumPy, Matplotlib, Seaborn, Exploratory Data Analysis, Data Cleaning.
- **AI & ML**: Machine Learning, Generative AI, Natural Language Processing (NLP), LangChain Integration, PyTorch, Hugging Face, RAG Models, Prompt Engineering, Model Evaluation.
- **Business Analytics**: Business Strategy, Market Research, Requirement Gathering, KPI Development, Stakeholder Communication, Business Intelligence.
- **Data Engineering**: Flask APIs, Supabase, MySQL, Relational Databases, ETL Processes.

### CERTIFICATIONS
- Microsoft DP-100: Designing and Implementing a Data Science Solution on Azure (Microsoft)
- Databases and SQL for Data Science with Python (Coursera)
- Microsoft Excel: Beginners Guide to Pivot Tables (Infosys)
- Marketing Analytics / Business Analytics / Communication basics (Infosys)
- Python for Data Science, AI & Development (IBM)
- Data Science Methodology / Tools for Data Science (IBM)
- TCS iON Career Edge (TCS)
- Innovation Through Design (University of Sydney)

### CONTACT DETAILS
- Email: sharmadivyanshu.ds@gmail.com
- LinkedIn: https://www.linkedin.com/in/divyanshu-sharma-02591726a/
- GitHub: https://github.com/Dvysharma`;

    // Detect if the key is an OpenRouter key
    const isOpenRouter = apiKey.startsWith("sk-or-");

    if (isOpenRouter) {
      console.log("Chat API: Detected OpenRouter key prefix ('sk-or-'). Routing request to OpenRouter...");
      // --- ROUTE TO OPENROUTER ---
      const openRouterMessages = [
        { role: "system", content: systemPrompt },
        ...messages.map((m: any) => ({
          role: m.role === "assistant" ? "assistant" : "user",
          content: m.content || m.text || ""
        }))
      ];

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Divyanshu Portfolio"
        },
        body: JSON.stringify({
          model: "openrouter/free", // Using the auto-routing free model on OpenRouter
          messages: openRouterMessages,
          temperature: 0.6,
          max_tokens: 400
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("OpenRouter API Error:", errorText);
        return NextResponse.json(
          { error: "OpenRouter API error", details: errorText },
          { status: 500 }
        );
      }

      const data = await response.json();
      const candidateText = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that response.";

      return NextResponse.json({
        role: "model",
        parts: [{ text: candidateText }],
        provider: "OpenRouter"
      });

    } else {
      console.log("Chat API: Routing request directly to Google Gemini API...");
      // --- ROUTE DIRECTLY TO GOOGLE GEMINI API ---
      const useBearer = apiKey.startsWith("ya29.");
      const requestUrl = useBearer
        ? "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"
        : `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

      const contents = messages.map((m: any) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content || m.text || "" }]
      }));

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (useBearer) {
        headers["Authorization"] = `Bearer ${apiKey}`;
      }

      let response = await fetch(requestUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
          contents,
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          generationConfig: {
            temperature: 0.6,
            maxOutputTokens: 400,
          }
        }),
      });

      // Fallback directly to gemini-1.5-flash if gemini-2.5-flash is overloaded or unavailable
      if (!response.ok) {
        console.warn("Primary direct gemini-2.5-flash failed. Attempting fallback to gemini-1.5-flash...");
        const fallbackUrl = useBearer
          ? "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"
          : `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        response = await fetch(fallbackUrl, {
          method: "POST",
          headers,
          body: JSON.stringify({
            contents,
            systemInstruction: {
              parts: [{ text: systemPrompt }]
            },
            generationConfig: {
              temperature: 0.6,
              maxOutputTokens: 400,
            }
          }),
        });
      }

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Gemini API Error:", errorText);
        return NextResponse.json(
          { error: "Gemini API error", details: errorText },
          { status: 500 }
        );
      }

      const data = await response.json();
      const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that response.";

      return NextResponse.json({
        role: "model",
        parts: [{ text: candidateText }],
        provider: "Google Gemini"
      });
    }

  } catch (error) {
    console.error("Chat API Route Error:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

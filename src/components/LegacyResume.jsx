import './LegacyResume.css'

export default function LegacyResume() {
  return (
    <section id="legacy-resume" className="legacy">
      <div className="container">
        <h2 className="section-title">Additional Resume</h2>

        <div className="legacy-grid">
          <div className="legacy-column">
            <h3>Education</h3>
            <p className="muted">University of Florida, Gainesville, FL — December 2023</p>
            <p>Bachelor of Science in Computer Science &middot; GPA: 3.42</p>
            <p className="muted">Relevant Coursework: Operating Systems, Data Structures and Algorithms, Information and Database Systems, UX Design, Programming Language Concepts, Introduction to Software Engineering, Computer-Aided Graphics and Design (SolidWorks)</p>

            <h3>Skills & Technologies</h3>
            <ul>
              <li><strong>Languages:</strong> C++, Java, C, TypeScript, JavaScript, ReactJS, HTML, CSS, MATLAB, Bootstrap, RISC-V Assembly</li>
              <li><strong>Software:</strong> Azure OpenAI, Visual Studio, VS Code, IntelliJ IDEA, CLion, SolidWorks, Microsoft Office, Jira</li>
              <li><strong>Awards:</strong> Dean’s List Spring 2023; UF Grace Hopper Celebration Scholarship 2022; SWElebrity of the Week 2022</li>
            </ul>
          </div>

          <div className="legacy-column">
            <h3>Experience</h3>

            <h4>Software Engineer Intern — Intelligent Edge Management Team</h4>
            <p className="muted">Microsoft, Redmond, WA &middot; May 2023 – Aug 2023</p>
            <ul>
              <li>Developed "OSConfig," an Azure Open Source VS Code extension using TypeScript to improve configuration file creation.</li>
              <li>Deployed an Azure OpenAI model to interpret real-time user data and generate accurate JSON config files in VS Code.</li>
              <li>Enabled validation of AI-generated configuration documents by ingesting Windows device schemas.</li>
              <li>Designed an end-to-end user experience using the VS Code API with input validation and error handling.</li>
              <li>Processed model schema data to show completion list details for 200+ settings via hover tooltips.</li>
            </ul>

            <h4>Technical Intern — Information Security Promotion Division</h4>
            <p className="muted">DENSO International America, Inc., Southfield, MI &middot; May 2022 – Aug 2022</p>
            <ul>
              <li>Communicated external alerts from Auto-ISAC Red Portal and CISA to internal security teams.</li>
              <li>Developed a Software Bill of Materials template in Excel to improve product registration.</li>
              <li>Authored guidelines to assist vulnerability management and worked with PMs to document meeting minutes.</li>
            </ul>

            <h3>Leadership</h3>
            <h4>Evening with Industry Director</h4>
            <p className="muted">Society of Women Engineers (SWE), UF &middot; May 2022 – May 2023</p>
            <ul>
              <li>Planned in-person and virtual recruitment events connecting 200+ students with companies.</li>
              <li>Managed logistics, volunteers, budgets, and communication with 50+ company contacts.</li>
            </ul>

            <h4>Engineers in the Swamp Director</h4>
            <p className="muted">Society of Women Engineers (SWE), UF &middot; May 2021 – May 2022</p>
            <ul>
              <li>Organized introductory events for incoming students managing 200+ attendees and 25+ organizations.</li>
            </ul>
          </div>
        </div>

        <h3>Projects</h3>
        <div className="projects-list">
          <h4>SwampySells (MERN Stack)</h4>
          <p className="muted">Aug 2023 – Dec 2023</p>
          <ul>
            <li>Built a full-stack e‑commerce platform for authenticated UF students to exchange used items; added a messaging interface and integrated backend storage.</li>
            <li>Used Jira for sprint planning and task assignments.</li>
          </ul>

          <h4>Basic Compiler (Java)</h4>
          <p className="muted">Jan 2023 – Apr 2023</p>
          <ul>
            <li>Implemented a compiler with lexical scanning, parsing, type-checking, and code generation to emit Java based on a custom grammar.</li>
          </ul>

          <h4>Custom Message Logging (C)</h4>
          <p className="muted">Oct 2022</p>
          <ul>
            <li>Implemented a message-logging system layered on top of the Linux kernel diagnostic logger, added system calls, and provided a static C API.</li>
          </ul>

          <h4>Web Scraper — COVID-19 Statistics (Python)</h4>
          <p className="muted">ShellHacks Hackathon — Sep 2020</p>
          <ul>
            <li>Built a scraper to extract state-level COVID-19 stats and a Pygame UI for display and sorting.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

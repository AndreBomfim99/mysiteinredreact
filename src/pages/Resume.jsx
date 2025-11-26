import Sidebar from '../components/Sidebar';
import './Home.css';

function About() {
  return (
    <div className="page-container">
      <main className="main-content container">
        <div className="content">
          <article className="main-article">
            <h2>My Professional Resume</h2>
            <p className="article-meta">Published on July 10, 2025 by André</p>
            
            <div className="article-content">
              <h3>ANDRÉ BOMFIM DA SILVA</h3>
              <p className="section-title">ANDRÉ BOMFIM DA SILVA</p>

                    <p><strong>Phone:</strong> +55 11 94965-2657</p>
<p><strong>Email:</strong> andre.bomfim99@gmail.com</p>
<p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/andre-bomfim/">linkedin.com/in/andre-bomfim</a></p>
<p><strong>GitHub:</strong> <a href="https://github.com/AndreBomfim99">github.com/AndreBomfim99</a></p>

<p className="section-title">PROFESSIONAL SUMMARY</p>
<p>Computer Engineering student with experience in data engineering, cloud computing, and machine learning projects. Also worked at the intersection of civil engineering and technology, applying IT solutions to modernize and streamline operational workflows.</p>

<p className="section-title">PROFESSIONAL EXPERIENCE</p>

<p><strong>Data Engineering Intern</strong></p>
<p><strong>CompassUOL | Sep 2024 – Feb 2025</strong></p>
<p>Served as a Data Engineering Intern at CompassUOL, a Brazilian tech company under the UOL Group that provides digital transformation services. Due to my background in data projects, I was assigned to the Data Engineering division.</p>
<p>Designed and implemented data pipelines to process large volumes of data using Docker and Kubernetes. Extensively used SQL, particularly PostgreSQL, for data exploration, transformation, and preparation. Developed ETL processes and real-time data analysis using Python and Apache Spark, including SQL-based analytical queries.</p>
<p>Built data lakes for advanced analysis using various AWS services:</p>
<ul>
  <li><strong>Glue</strong> and <strong>S3</strong> for data ingestion</li>
  <li><strong>S3</strong>, <strong>Redshift</strong>, and <strong>DynamoDB</strong> for storage</li>
  <li><strong>Glue</strong>, <strong>Lambda</strong>, and <strong>Step Functions</strong> for data processing</li>
  <li><strong>Athena</strong> and <strong>QuickSight</strong> for data visualization</li>
</ul>

<p><strong>Technical Administrative Assistant</strong></p>
<p><strong>Fundação Getúlio Vargas (FGV) | Nov 2021 – Nov 2023</strong></p>
<p>Worked with financial engineering and pricing analysis for sanitation infrastructure projects managed by SABESP (São Paulo's State Sanitation Company).</p>
<p>Conducted market research by interviewing manufacturers, suppliers, and producers. Performed pricing and cost projection analyses using Excel and Tableau, including statistical modeling and linear regression techniques.</p>
<p>Later contributed to a federal infrastructure project with DNIT (Brazil's National Department of Transport Infrastructure):</p>
<p>Collected and analyzed socioeconomic impact data from highway construction projects in surrounding urban areas. Collaborated with economic and engineering teams to evaluate the effects of infrastructure development.</p>
<p>Used <strong>R (Shiny)</strong> and <strong>SQL</strong> for data extraction and preprocessing; created interactive dashboards and geospatial visualizations with <strong>QGIS</strong> and <strong>Power BI</strong>.</p>

<p><strong>Engineering Technical Assistant</strong></p>
<p><strong>Egis Engenharia e Consultoria | Sep 2020 – Nov 2021</strong></p>
<p>Worked primarily on SABESP's sanitation infrastructure projects and with other civil engineering and road construction companies.</p>
<p>Managed daily planning and scheduling of field teams for audit inspections and service measurements in accordance with SABESP's guidelines.</p>
<p>Supported the Concrete and Asphalt Quality Control Laboratory, collecting samples of concrete, asphalt, soil, gravel, sand, cement, and other materials for testing.</p>
<p>Compiled technical reports and service summaries for presentation to SABESP's board of directors and technical leadership.</p>

<p className="section-title">TECHNICAL SKILLS</p>

<p><strong>Programming Languages:</strong></p>
<p>Professional experience with C/C++ in industrial automation projects.</p>
<p>Academic experience with Java.</p>
<p>Practical experience with Python, SQL, R, and JavaScript.</p>

<p><strong>Development Environments:</strong></p>
<p>Microsoft Visual Studio, Borland C++, Visual Studio Code, IntelliJ IDEA.</p>

<p><strong>Databases & Big Data:</strong></p>
<p>PostgreSQL, Apache Spark, data warehouse concepts.</p>

<p><strong>Cloud & Infrastructure:</strong></p>
<p>Hands-on experience with cloud environments:</p>
<p>AWS (S3, Lambda, Glue, EC2)</p>
<p>Google Cloud Platform (GCP)</p>
<p>Docker, Kubernetes</p>
<p>Infrastructure as Code using Terraform</p>

<p><strong>Visualization & Analytics Tools:</strong></p>
<p>Power BI, Advanced Excel (data modeling, dashboards, pivot charts).</p>

<p><strong>Agile & DevOps:</strong></p>
<p>Applied Scrum methodologies.</p>
<p>Experience with CI/CD pipelines and DevOps practices.</p>

<p><strong>Monitoring & Version Control:</strong></p>
<p>Zabbix for system monitoring.</p>
<p>GitHub for version control and collaboration.</p>

<p><strong>Modeling & Geospatial Technologies:</strong></p>
<p>Experience with AutoCAD, Revit, QGIS (spatial analysis and georeferenced data), and Qt Framework (GUI development with C++).</p>

<p className="section-title">EDUCATION</p>

<p><strong>Bachelor's Degree in Computer Engineering (in progress)</strong></p>
<p>Universidade Virtual do Estado de São Paulo – UNIVESP</p>
<p>Aug 2023 – Jun 2028</p>

<p><strong>Technical Degree in Industrial Automation</strong></p>
<p>Serviço Nacional de Aprendizagem Industrial – SENAI</p>
<p>Aug 2005 – Jun 2007</p>

<p className="section-title">CERTIFICATIONS</p>
<ul>
  <li>AWS Cloud Practitioner – Amazon Web Services (2024)</li>
  <li>AWS re/Start – Escola da Nuvem (2024)</li>
  <li>Advanced PostgreSQL – Udemy (2023)</li>
  <li>JavaScript and Data Structures – FreeCodeCamp (2023)</li>
</ul>

            </div>
          </article>
        </div>

        <Sidebar />
      </main>
    </div>
  );
}

export default About;
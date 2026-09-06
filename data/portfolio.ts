export const profile = { name: "Hikmal Abror", email: "hikmal.abror@example.com", location: "Indonesia · Open to remote", linkedin: "https://www.linkedin.com/in/your-username", github: "https://github.com/your-username" };
export const stats = [{ value: 3, suffix: "+", label: "Tahun membangun data" }, { value: 18, suffix: "+", label: "Pipeline production" }, { value: 2, suffix: "TB", label: "Data diproses / hari" }];
export const skillGroups = [
  { title: "Bahasa & Query", items: [["Python",92],["SQL",94],["Scala",76]] },
  { title: "Big Data & Processing", items: [["Apache Spark",90],["Kafka",86],["Hadoop",74],["Flink",70]] },
  { title: "Orchestration", items: [["Airflow",89],["Dagster",72],["Prefect",76]] },
  { title: "Cloud", items: [["AWS · S3 / Glue / Redshift",86],["GCP · BigQuery / Dataflow",82],["Azure",68]] },
  { title: "Warehouse & Modeling", items: [["Snowflake",82],["dbt",88],["BigQuery",86]] },
  { title: "Database", items: [["PostgreSQL",91],["MongoDB",75],["Cassandra",70]] },
  { title: "Platform Tools", items: [["Docker",90],["Kubernetes",76],["Git",92],["Terraform",73]] },
] as const;
export const experience = [
  { period:"2025 — Sekarang", role:"Data Engineer", company:"Nusantara Data Labs", description:"Membangun platform data batch dan streaming untuk tim analytics, risk, dan operations.", wins:["SLA pipeline 99,9%","Biaya compute turun 31%"] },
  { period:"2024 — 2025", role:"Junior Data Engineer", company:"Archipelago Commerce", description:"Mengembangkan pipeline ELT, data quality checks, dan model dimensional untuk reporting harian.", wins:["120+ model dbt","Freshness dari 8 jam menjadi 90 menit"] },
  { period:"2023 — 2024", role:"Data Analyst Intern", company:"InsightWorks", description:"Mengotomasi pengumpulan data operasional dan membangun dashboard performa lintas tim.", wins:["12 jam kerja manual dihemat / minggu","Single source of truth untuk 4 tim"] },
];
export const projects = [
  { number:"01", title:"Real-time ETL Pipeline", subtitle:"Kafka × Spark Streaming", description:"Memproses event transaksi secara real-time dengan exactly-once semantics, observability, dan dead-letter queue.", impact:"Latency turun 40%", stack:["Kafka","Spark","PostgreSQL","Docker"], flow:["Events","Kafka","Spark","Lakehouse"] },
  { number:"02", title:"Cloud Data Warehouse", subtitle:"Analytics-ready ELT", description:"Warehouse dimensional dengan incremental model, automated data tests, lineage, dan semantic layer.", impact:"Query 3,2× lebih cepat", stack:["BigQuery","dbt","Airflow","Terraform"], flow:["SaaS","Airflow","dbt","BigQuery"] },
  { number:"03", title:"Lakehouse Observability", subtitle:"Trust every dataset", description:"Framework data quality yang memantau freshness, volume, schema drift, dan anomali distribusi.", impact:"Incident turun 62%", stack:["Python","Spark","Great Expectations","Grafana"], flow:["Lake","Quality","Metrics","Alerts"] },
];
export const certifications = [
  { short:"AWS", title:"AWS Certified Data Engineer", issuer:"Amazon Web Services", year:"2026" }, { short:"GCP", title:"Professional Data Engineer", issuer:"Google Cloud", year:"2025" }, { short:"DBX", title:"Databricks Data Engineer", issuer:"Databricks", year:"2025" }, { short:"DBT", title:"dbt Analytics Engineering", issuer:"dbt Labs", year:"2024" },
];

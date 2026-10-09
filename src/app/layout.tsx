import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Manish Shetty | Data Engineer & Backend Developer",
  description:
    "Architecting scalable data pipelines, microservices, and enterprise data solutions. Analyst Trainee at Cognizant in AI & Analytics.",
  keywords: [
    "Data Engineer",
    "Backend Developer",
    "Manish Shetty",
    "Azure Data Factory",
    "Databricks",
    "Snowflake",
    "PySpark",
    "Java",
    "Spring Boot",
    "Microservices",
    "Kafka",
    "Kubernetes",
  ],
  authors: [{ name: "Manish Shetty" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#6366F1] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}

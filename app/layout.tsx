import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata = { title: "André Alvarado | Technology · Data · Engineering", description: "Portfolio de André Alvarado: proyectos de software, análisis de datos, Machine Learning y aprendizaje tecnológico." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es"><body>{children}</body></html>; }

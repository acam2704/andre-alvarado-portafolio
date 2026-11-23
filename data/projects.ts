const portfolioLinks = {
  name: "André Camilo Alvarado Mendoza",
  email: "andrecalvarado2704@gmail.com",
  phone: "+503 6191 8826",

  github: "https://github.com/acam2704",
  linkedin: "https://www.linkedin.com/in/andr%C3%A9-alvarado-441016446",

  ingenia: "https://github.com/acam2704/Projects",
  maze: "https://github.com/acam2704/Maze-Python",
  fedeUsefulData: "https://github.com/acam2704/FEDE-USEFUL-DATA",

  // AI Challenge
  neuralNetworks:
    "https://drive.google.com/file/d/1LMVTzuEDNsnz688WXg4BAfyxIBWomEum/view?usp=sharing",

  cnnVision:
    "https://drive.google.com/file/d/1j_fUe1IxyMus6Pyl-YtaAFNG__KohfKZ/view?usp=sharing",

  aiEthics:
    "https://drive.google.com/file/d/1rr318EotQVhPBegb8QnzdpfwTmMpK0G3/view?usp=sharing",

  // Hotspots Comerciales
  kmeansClustering:
    "https://drive.google.com/file/d/1ZX9SDOPdcOKEkG23S_eJOHCNGBWCx1_6/view?usp=sharing",

  knn:
    "https://colab.research.google.com/drive/1FPEhIQQqnQUx7e78OsRlIms-c8ty7OLZ?usp=sharing",

  // Regression
  logisticRegression:
    "https://colab.research.google.com/drive/1a-yxGpBeZ5q9rv3TZ_9GzYBjg_wZ6VR8?usp=sharing",

  wineRegression:
    "https://drive.google.com/file/d/1uWKY7SDPFaBlbUqBAbWFZzOUv5QEqjPm/view?usp=sharing",

  randomForest:
    "https://colab.research.google.com/drive/1tneZiQYjK262ssoCbhGrCdkuYFXNQvpw?usp=sharing",


  hotspotsAnalysis:
    "https://colab.research.google.com/drive/1jjX8Z8jUIOV_UkAKSEcBFzHIGYQDWGeB?usp=sharing",

  hotspotsDataCleaning:
    "https://colab.research.google.com/drive/1eziCQpo0E9mO4HELJtjuo-gB1xd8lq7L?usp=sharing",

  // Certificates
  excelExpert:
    "https://www.credly.com/badges/f6df5983-92c2-450c-8aca-299f9326a42b/public_url",

  excelAssociate:
    "https://www.credly.com/badges/125e2056-6c7e-42e6-a82a-72b857d67107/public_url",

  kodigoCertificate: "/certificates/kodigo diploma.pdf",
  telusCertificate: "/certificates/telus conversations.pdf",

  // Attendance System
  attendanceExcel: "/projects/attendance/attendance system.xlsm",
  attendancePreview: "/projects/attendance/preview.png",
};
export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string[];
  year: string;
  status: string;
  description: string;
  problem: string;
  goal: string;
  approach: string[];
  tools: string[];
  outcome: string;
  learning: string;
  accent: string;
  links: {
    label: string;
    url: string;
  }[];
  evidence: string[];
};
export const projects: Project[] = [
  {
    slug: "hotspots",
    number: "01",
    title: "Hotspots Comerciales",
    subtitle: "Accesibilidad territorial a servicios financieros",
    category: ["Data Analysis", "Machine Learning", "Geospatial"],
    year: "2026",
    status: "Research project",
    description:
      "Exploración territorial de la distribución de cajeros automáticos y su relación con variables demográficas y socioeconómicas en El Salvador.",
    problem:
      "La distribución de servicios financieros no es uniforme. Comprender cómo se relaciona la disponibilidad de ATM con la población, la ruralidad y otras características territoriales ayuda a explorar posibles brechas de acceso.",
    goal:
      "Integrar datos territoriales, demográficos y de ATM para analizar patrones y explorar agrupamientos de distritos.",
    approach: [
      "Integración y limpieza de fuentes territoriales y tabulares",
      "Construcción de variables y proporciones por distrito",
      "Exploración y visualización de datos",
      "Transformaciones y escalamiento de variables",
      "Aplicación de clustering y evaluación",
      "Interpretación de resultados por territorio",
    ],
    tools: [
      "Python",
      "Pandas",
      "GeoPandas",
      "Scikit-learn",
      "Jupyter",
      "Matplotlib",
      "K-Means",
      "KNN",
      "PCA",
    ],
    outcome:
      "Se construyó un flujo de análisis territorial y modelos exploratorios para comparar patrones entre entidades financieras. Agrega aquí tus resultados, métricas y mapas definitivos.",
    learning:
      "Aprendí que la calidad de los datos, el diseño de variables y la interpretación importan tanto como aplicar un algoritmo. Los resultados requieren contexto territorial y no deben interpretarse automáticamente como causalidad.",
    accent: "mint",
    links: [
        {
            label: "Análisis territorial y modelos (Colab)",
            url: portfolioLinks.hotspotsAnalysis,
        },
        {
            label: "Limpieza y procesamiento de datos (Colab)",
            url: portfolioLinks.hotspotsDataCleaning,
        },
        {
            label: "Implementación de KNN (Colab)",
            url: portfolioLinks.knn,
        },
        {
            label: "Clustering con K-Means",
            url: portfolioLinks.kmeansClustering,
        },
        {
            label: "Repositorio de datasets",
            url: portfolioLinks.fedeUsefulData,
        },
    ],
    evidence: [
      "Mapa territorial de ATM",
      "Gráficos exploratorios",
      "Comparación de modelos",
      "Notebook de procesamiento",
    ],
  },

  {
    slug: "ai-challenge",
    number: "02",
    title: "AI Challenge",
    subtitle: "Clustering y clasificación con K-Means & KNN",
    category: ["Machine Learning", "Data Analysis"],
    year: "2026",
    status: "Course challenge",
    description:
      "Experimentación con técnicas de aprendizaje automático para explorar agrupamientos y evaluar modelos a partir de variables analizadas.",
    problem:
      "Encontrar estructura en datos multidimensionales requiere explorar relaciones, preparar variables y comparar metodologías de forma crítica.",
    goal:
      "Aplicar K-Means y KNN, estudiar la influencia de las variables y comparar configuraciones usando métricas y visualizaciones.",
    approach: [
      "Exploración y preparación del dataset",
      "Transformación de variables y escalamiento",
      "Análisis de componentes principales (PCA)",
      "Pruebas de distintos valores de K",
      "Evaluación de agrupamientos y modelos",
      "Visualización e interpretación",
    ],
    tools: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "K-Means",
      "KNN",
      "PCA",
      "Matplotlib",
      "Seaborn",
    ],
    outcome:
      "Se compararon diferentes configuraciones y se analizaron métricas y resultados. Inserta las tablas y conclusiones finales verificadas de tu notebook.",
    learning:
      "Comprendí que una métrica aislada no cuenta toda la historia: es necesario considerar el objetivo, la escala de los datos, el comportamiento de los grupos y las limitaciones del modelo.",
    accent: "sage",
    links: [
        {
            label: "Redes neuronales",
            url: portfolioLinks.neuralNetworks,
        },
        {
            label: "Visión artificial con CNN",
            url: portfolioLinks.cnnVision,
        },
        {
            label: "Inteligencia artificial ética",
            url: portfolioLinks.aiEthics,
        },              
    ],
    evidence: [
      "Matriz de evaluación",
      "Visualización PCA",
      "Análisis por K",
      "Notebook",
    ],
  },

  {
    slug: "regression",
    number: "03",
    title: "Linear Regression",
    subtitle: "Modelar relaciones y estimar tendencias",
    category: ["Machine Learning", "Python"],
    year: "2026",
    status: "Learning exercise",
    description:
      "Implementación y análisis de un modelo de regresión lineal para estudiar la relación entre variables y comprender predicciones.",
    problem:
      "Observar datos y describir tendencias no siempre basta; un modelo permite cuantificar relaciones y evaluar predicciones.",
    goal:
      "Construir y analizar un modelo de regresión lineal, visualizar la relación y revisar su desempeño.",
    approach: [
      "Revisión y preparación de datos",
      "Selección de variables",
      "Entrenamiento del modelo",
      "Visualización de la recta",
      "Evaluación e interpretación de resultados",
    ],
    tools: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Jupyter Notebook",
    ],
    outcome:
      "Actividad de aprendizaje sobre ajuste lineal y evaluación. Añade aquí los gráficos, valores y conclusión exacta de tu ejercicio.",
    learning:
      "Practiqué interpretar la relación entre variables, observar errores y entender que un modelo sencillo puede ser útil, pero sus supuestos y límites deben revisarse.",
    accent: "olive",
    links: [
        {
            label: "Regresión logística y árbol de decisión (Colab)",
            url: "https://colab.research.google.com/drive/1a-yxGpBeZ5q9rv3TZ_9GzYBjg_wZ6VR8?usp=sharing",
        },
        {
            label: "Fine-tuning - Wine Regression",
            url: "https://drive.google.com/file/d/1uWKY7SDPFaBlbUqBAbWFZzOUv5QEqjPm/view?usp=sharing",
        },
        {
            label: "Random Forest (Colab)",
            url: "https://colab.research.google.com/drive/1tneZiQYjK262ssoCbhGrCdkuYFXNQvpw?usp=sharing",
        },
    ],
    evidence: [
      "Dispersión de datos",
      "Recta ajustada",
      "Evaluación del modelo",
    ],
  },

  {
    slug: "maze",
    number: "04",
    title: "Maze Solver",
    subtitle: "Algoritmos, decisiones y búsqueda de caminos",
    category: ["Algorithms", "Python"],
    year: "2026",
    status: "Algorithm exercise",
    description:
      "Resolución de un laberinto mediante lógica algorítmica, exploración de caminos y decisiones sobre movimientos posibles.",
    problem:
      "Encontrar una salida en un espacio limitado implica representar el problema, identificar estados y decidir qué caminos explorar.",
    goal:
      "Aplicar estructuras algorítmicas y lógica de decisión para encontrar una ruta y evidenciar el proceso.",
    approach: [
      "Representación del laberinto",
      "Definición de estados y movimientos válidos",
      "Exploración de caminos",
      "Manejo de condiciones de bloqueo",
      "Visualización del recorrido y resultado",
    ],
    tools: [
      "Python",
      "Algorithms",
      "Recursion",
      "Decision logic",
    ],
    outcome:
      "El algoritmo explora las opciones definidas y busca alcanzar la salida. Incluye tus capturas y explicación específica del algoritmo que implementaste.",
    learning:
      "Fortalecí la lógica, la descomposición de problemas, la recursividad y el seguimiento paso a paso de una solución.",
    accent: "forest",
    links: [
      { label: "Código", url: "#" },
      { label: "Evidencia", url: "#" },
    ],
    evidence: [
      "Laberinto inicial",
      "Ruta explorada",
      "Solución final",
    ],
  },

  {
    slug: "attendance",
    number: "05",
    title: "Attendance Management",
    subtitle: "Una herramienta para organizar y comprender registros",
    category: ["Software Development", "Database Design"],
    year: "2025–2026",
    status: "Ongoing / prototype",
    description:
      "Conceptualización y desarrollo de una herramienta para registrar asistencias, organizar datos y facilitar el seguimiento por estudiantes y personal.",
    problem:
      "Registrar, consultar y resumir asistencia manualmente puede consumir tiempo y dificultar la detección de patrones o el seguimiento oportuno.",
    goal:
      "Diseñar un flujo de registro y consulta con roles, datos estructurados y resúmenes que faciliten la gestión.",
    approach: [
      "Identificación de roles y necesidades",
      "Diseño de entidades y relaciones",
      "Organización de registros y estados",
      "Diseño de flujos de registro y consulta",
      "Exploración de automatización y notificaciones",
    ],
    tools: [
      "Excel VBA",
      "SQL",
      "MySQL",
      "PHP",
      "JavaScript",
      "Web development",
    ],
    outcome:
      "Proyecto personal/académico en evolución. Describe aquí la versión que sí está implementada y enlaza capturas o repositorio disponibles.",
    learning:
      "Aprendí a pensar en usuarios, estructura de datos, consistencia, automatización y cómo un sistema puede reducir tareas repetitivas.",
    accent: "mint",
    links: [
        {
            label: "Descargar sistema de asistencia (Excel VBA)",
            url: "/projects/attendance/attendance-system.xlsm",
        },
        {
            label: 'Visualización',
            url: '#'
        }
    ],
    evidence: [
      "Modelo de datos",
      "Prototipo de interfaz",
      "Flujo de registro",
      "Reportes",
    ],
  },

  {
    slug: "garden",
    number: "06",
    title: "Smart Garden Cover",
    subtitle: "Automatización para proteger un jardín",
    category: ["Electronics", "Engineering"],
    year: "Academic project",
    status: "Prototype",
    description:
      "Prototipo de una cubierta automatizada para proteger un jardín usando sensores y un sistema de control basado en condiciones ambientales.",
    problem:
      "Las condiciones del clima pueden afectar un jardín y una cubierta manual requiere intervención constante.",
    goal:
      "Explorar una solución automatizada que responda a condiciones ambientales para proteger el espacio.",
    approach: [
      "Identificación del escenario",
      "Diseño de lógica de control",
      "Integración de sensores y actuadores",
      "Prototipado y pruebas",
    ],
    tools: [
      "Arduino",
      "Electronics",
      "Sensors",
      "Prototyping",
    ],
    outcome:
      "Prototipo de idea para exposición académica. Agrega fotos del prototipo real y detalles de componentes usados.",
    learning:
      "Conecté programación con una aplicación física y comprendí mejor el papel de sensores, decisiones y automatización.",
    accent: "sage",
    links: [
        {
            label: "Ver repositorio en GitHub",
            url: "https://github.com/acam2704/Maze-Python",
        },
        {
            label: 'Visualización',
            url: '#'
        }
    ],
    evidence: [
      "Diseño conceptual",
      "Prototipo",
      "Prueba",
    ],
  },

  {
    slug: "expo-tech",
    number: "07",
    title: "Expo Tech — Job Connection",
    subtitle: "Tecnología para oportunidades de trabajo confiables",
    category: ["Web Development", "Social Impact"],
    year: "Academic project",
    status: "Concept / project",
    description:
      "Propuesta de plataforma para conectar personas con oportunidades de trabajos informales de construcción y reparaciones, incorporando ideas para reducir riesgos de estafa.",
    problem:
      "Encontrar personas confiables para trabajos de construcción o reparación puede ser difícil y la información dispersa aumenta la incertidumbre.",
    goal:
      "Diseñar una experiencia sencilla para publicar, encontrar y evaluar oportunidades y servicios.",
    approach: [
      "Identificación de usuarios y necesidades",
      "Propuesta de flujo de búsqueda y publicación",
      "Diseño de interfaz",
      "Consideración de señales de confianza y prevención de estafas",
    ],
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "UI design",
    ],
    outcome:
      "Propuesta desarrollada para una actividad académica. Presenta pantallas, funcionalidades planificadas y lo que efectivamente construiste.",
    learning:
      "Practiqué pensar desde las necesidades de usuarios, la claridad de la interfaz y el impacto de una solución digital.",
    accent: "olive",
    links: [
        {
            label: "Ver repositorio en GitHub",
            url: "https://github.com/acam2704/Projects",
        },
    ],
    evidence: [
      "Pantallas",
      "Flujo de usuario",
      "Propuesta",
    ],
  },
  {
    slug: "power-bi-dashboard",
    number: "08",
    title: "Power BI Dashboard",
    subtitle: "Interactive data visualization and business intelligence",
    category: ["Data Analysis", "Business Intelligence", "Data Visualization"],
    year: "2026",
    status: "Completed",

    description:
      "An interactive dashboard developed with Power BI to transform data into meaningful visual insights.",

    problem:
      "Understanding complex datasets can be challenging without clear and accessible visual representations.",

    goal:
      "Develop an interactive dashboard that organizes information, highlights relevant patterns and supports data exploration.",

    approach: [
      "Explored and prepared the source data",
      "Designed the data model",
      "Created measures and calculated fields",
      "Developed interactive visualizations",
      "Organized the dashboard to improve data interpretation",
    ],

    tools: [
      "Power BI",
      "Power Query",
      "DAX",
      "Data Visualization",
    ],

    outcome:
      "Developed an interactive Power BI dashboard for exploring and interpreting data.",

    learning:
      "Strengthened my skills in data modeling, visualization and communicating insights through interactive dashboards.",

    accent: "mint",

    links: [
      {
        label: "Download Power BI dashboard (.pbix)",
        url: "/projects/power-bi/dashboard.pbix",
      },
    ],

    evidence: [
      "Interactive Power BI dashboard",
      "Data model",
      "DAX measures",
      "Dashboard visualizations",
    ],
  }
];

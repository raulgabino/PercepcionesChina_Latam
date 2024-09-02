import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const PerceptionClusters = () => {
  const data = [
    { name: 'Pro China', value: 22.06 },
    { name: 'Pro China no militar', value: 43.15 },
    { name: 'No China relacional', value: 15.87 },
    { name: 'No China comercial', value: 19.01 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

const CountrySupport = () => {
  const data = [
    { country: 'Nicaragua', support: 80 },
    { country: 'Panamá', support: 75 },
    { country: 'Rep. Dominicana', support: 70 },
    { country: 'Uruguay', support: 45 },
    { country: 'Bolivia', support: 40 },
    { country: 'Ecuador', support: 35 },
    { country: 'Colombia', support: 30 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="country" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="support" fill="#8884d8" name="Nivel de apoyo (%)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const PerceptionFactors = () => {
  const data = [
    { factor: 'Apoyo a producción nacional', A: 65, B: 85 },
    { factor: 'Apoyo a economía de mercado', A: 70, B: 90 },
    { factor: 'Apoyo a la democracia', A: 60, B: 80 },
    { factor: 'Percepción de ingreso social justo', A: 75, B: 55 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="factor" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Percepción positiva de China" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Percepción negativa de China" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const App = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Percepciones de China en América Latina</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Resumen del Estudio</h2>
        <p className="mb-4">Este estudio analiza las percepciones de los ciudadanos latinoamericanos hacia China, utilizando datos de la encuesta Latinobarómetro 2020. Se evaluaron tres dimensiones: relacional, comercial y militar.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Grupos de Percepción Identificados</h2>
        <p className="mb-4">El análisis de clústeres reveló cuatro grupos distintos de percepciones:</p>
        <PerceptionClusters />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Variaciones entre Países</h2>
        <p className="mb-4">Se observaron diferencias significativas en el apoyo a China entre los países latinoamericanos:</p>
        <CountrySupport />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Factores Asociados a Percepciones Positivas</h2>
        <p className="mb-4">Varios factores se asociaron con percepciones más positivas de China:</p>
        <PerceptionFactors />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Conclusiones Clave</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">El estudio revela una diversidad de percepciones hacia China en América Latina, más compleja de lo que se pensaba anteriormente.</li>
          <li className="mb-2">Los resultados contradicen la teoría de identidad social y apoyan las teorías individualistas de opinión pública.</li>
          <li className="mb-2">Se subraya la importancia de analizar las percepciones individuales además de las relaciones entre estados.</li>
          <li>Se sugiere realizar más investigaciones cualitativas para profundizar en las causas de estas variaciones en las percepciones.</li>
        </ul>
      </section>
    </div>
  );
};

export default App;

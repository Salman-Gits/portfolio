import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const technicalSkills = [
  { name: 'HTML/CSS/JS', level: 95 },
  { name: 'React.js', level: 92 },
  { name: 'Java', level: 88 },
  { name: 'Spring Boot', level: 85 },
  { name: 'MySQL', level: 90 },
  { name: 'Architecture', level: 82 },
];

const softSkills = [
  { name: 'Problem Solving', value: 95 },
  { name: 'Adaptability', value: 90 },
  { name: 'Critical Thinking', value: 85 },
  { name: 'Communication', value: 88 },
];

const CUSTOM_TOOLTIP_STYLE = {
  backgroundColor: '#0c0c10',
  border: '1px solid rgba(255,255,255,0.1)',
  fontSize: '10px',
  fontFamily: 'monospace',
  color: '#f8fafc'
};

export default function SkillsVisualization() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
      {/* Chart 1: Technical */}
      <div className="bg-[#0c0c10] p-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-mono">01 / Technical</h3>
          <div className="text-[10px] text-slate-700 font-mono">Core Stack</div>
        </div>
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={technicalSkills}>
              <PolarGrid stroke="#222" />
              <PolarAngleAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }} />
              <Radar
                name="Proficiency"
                dataKey="level"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.15}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Soft Skills */}
      <div className="bg-[#0c0c10] p-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-mono">02 / Soft Skills</h3>
          <div className="text-[10px] text-slate-800 font-mono">Operations</div>
        </div>
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={softSkills} layout="vertical" margin={{ left: 20 }}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }} width={100} />
              <Tooltip 
                cursor={{ fill: 'rgba(99, 102, 241, 0.05)' }}
                contentStyle={CUSTOM_TOOLTIP_STYLE}
              />
              <Bar dataKey="value" fill="#6366f1" barSize={12} radius={[0, 4, 4, 0]}>
                {softSkills.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#6366f1' : '#4338ca'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

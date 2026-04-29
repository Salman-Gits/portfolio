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
  backgroundColor: '#0a0a0a',
  border: '1px solid #222',
  fontSize: '10px',
  fontFamily: 'monospace',
  color: '#888'
};

export default function SkillsVisualization() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#222] border border-[#222]">
      {/* Chart 1: Technical */}
      <div className="bg-[#111] p-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#555] font-mono">01 / Technical</h3>
          <div className="text-[10px] text-[#333] font-mono">Core Stack</div>
        </div>
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={technicalSkills}>
              <PolarGrid stroke="#222" />
              <PolarAngleAxis dataKey="name" tick={{ fill: '#666', fontSize: 10, fontFamily: 'monospace' }} />
              <Radar
                name="Proficiency"
                dataKey="level"
                stroke="#fff"
                fill="#fff"
                fillOpacity={0.05}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Soft Skills */}
      <div className="bg-[#111] p-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#555] font-mono">02 / Soft Skills</h3>
          <div className="text-[10px] text-[#333] font-mono">Operations</div>
        </div>
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={softSkills} layout="vertical" margin={{ left: 20 }}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" tick={{ fill: '#666', fontSize: 10, fontFamily: 'monospace' }} width={100} />
              <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                contentStyle={CUSTOM_TOOLTIP_STYLE}
              />
              <Bar dataKey="value" fill="#fff" barSize={12}>
                {softSkills.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#fff' : '#444'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

const Sun = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="2" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
    <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
    <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
    <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
  </svg>
);

const Cloud = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
    <path d="M8 17h12" />
  </svg>
);

const CloudLightning = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
    <path d="m13 12-3 5h4l-3 5" />
  </svg>
);

const Sparkles = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z" />
    <path d="M5 14l.8 1.7L7.5 16l-1.7.8L5 18.5l-.8-1.7L2.5 16l1.7-.3L5 14z" />
    <path d="M19 14l.8 1.7 1.7.3-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.3.8-1.7z" />
  </svg>
);

const Printer = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

const BookOpen = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M2 6a2 2 0 0 1 2-2h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4a2 2 0 0 0-2 2z" />
    <path d="M22 6a2 2 0 0 0-2-2h-6a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h6a2 2 0 0 1 2 2z" />
  </svg>
);

const Settings = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.4-1.7 1.7 1.7 0 0 0-1.4.3l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H2.8a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.7-1.4 1.7 1.7 0 0 0-.3-1.4l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V2.8a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1.4 1.7 1.7 1.7 0 0 0 1.4-.3l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.24.3.5.65.6 1a1.7 1.7 0 0 0 1.1.4h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.7 1.4z" />
  </svg>
);

const Calendar = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const CheckCircle = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const HelpCircle = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 2-3 4" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const Plus = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const Trash2 = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const Info = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const Heart = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const Download = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Upload = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const RainbowIcon = ({ className = "w-6 h-6", ...props }: IconProps) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    <path d="M4 20C4 11.1634 11.1634 4 20 4" stroke="#ef4444" />
    <path d="M8 20C8 13.3726 13.3726 8 20 8" stroke="#f97316" />
    <path d="M12 20C12 15.5817 15.5817 12 20 12" stroke="#eab308" />
    <path d="M16 20C16 17.7909 17.7909 16 20 16" stroke="#22c55e" />
  </svg>
);

const INITIAL_GOALS = [
  { id: 'g1', text: 'My Solo Safari (Independent Play)', desc: 'I played quietly by myself for 10-15 minutes without interrupting.' },
  { id: 'g2', text: 'The Waiting Game (Patient Pausing)', desc: 'I waited calmly while a grown-up was talking or busy.' },
  { id: 'g3', text: 'My Inside Weather Check (Expressing Needs)', desc: 'I used my words or a deep breath to say what I needed instead of yelling/whining.' }
];

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

type WeatherType = 'RAINBOW' | 'SUNNY' | 'CLOUDY' | 'STORMY';

interface WeatherTypeConfig {
  id: string;
  label: string;
  color: string;
  icon: React.ComponentType<IconProps>;
  badgeColor: string;
  description: string;
}

const WEATHER_TYPES: Record<WeatherType, WeatherTypeConfig> = {
  RAINBOW: { 
    id: 'rainbow', 
    label: 'Rainbow', 
    color: 'bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100 text-purple-700 border-purple-300', 
    icon: RainbowIcon,
    badgeColor: 'bg-purple-500 text-white',
    description: 'Outstanding Self-Regulation! Went above and beyond, communicated needs calmly, or chose a coping skill independently.'
  },
  SUNNY: { 
    id: 'sunny', 
    label: 'Sunny', 
    color: 'bg-amber-50 text-amber-700 border-amber-300', 
    icon: Sun,
    badgeColor: 'bg-amber-500 text-white',
    description: 'Great Job! Followed routines, waited patiently when asked, responded beautifully to redirects.'
  },
  CLOUDY: { 
    id: 'cloudy', 
    label: 'Cloudy', 
    color: 'bg-slate-100 text-slate-700 border-slate-300', 
    icon: Cloud,
    badgeColor: 'bg-slate-500 text-white',
    description: 'A Bit Restless. Needed several reminders to stop attention-seeking, but turned it around with a calm pause.'
  },
  STORMY: { 
    id: 'stormy', 
    label: 'Stormy', 
    color: 'bg-rose-50 text-rose-700 border-rose-300', 
    icon: CloudLightning,
    badgeColor: 'bg-rose-500 text-white',
    description: 'Big Feelings / High Disruption. Tantrums, yelling, or constant physical attention-seeking. (Focus on repairing & co-regulating).'
  }
};

interface Goal {
  id: string;
  text: string;
  desc: string;
}

interface TrackerData {
  [day: string]: {
    [goalId: string]: string | null;
  };
}

interface Notes {
  [day: string]: string;
}

export default function BehaviorTracker() {
  const [activeTab, setActiveTab] = useState<'chart' | 'guide' | 'setup'>('chart');
  const [isClient, setIsClient] = useState(false);
  
  const [goals, setGoals] = useState<Goal[]>(INITIAL_GOALS);
  const [newGoalText, setNewGoalText] = useState('');
  const [newGoalDesc, setNewGoalDesc] = useState('');
  const [reward, setReward] = useState('15 Minutes of Special 1-on-1 Adventure Time with Mom/Dad (no screens, child-led play!)');
  const [targetSuns, setTargetSuns] = useState(12);
  
  const [trackerData, setTrackerData] = useState<TrackerData>(() => {
    const initial: TrackerData = {};
    DAYS_OF_WEEK.forEach(day => {
      initial[day] = {};
      INITIAL_GOALS.forEach(goal => {
        initial[day][goal.id] = null;
      });
    });
    return initial;
  });

  const [notes, setNotes] = useState<Notes>(() => {
    const initial: Notes = {};
    DAYS_OF_WEEK.forEach(day => {
      initial[day] = '';
    });
    return initial;
  });

  // Load from localStorage on client mount
  useEffect(() => {
    setIsClient(true);
    try {
      const savedData = localStorage.getItem('regulation_chart_data');
      if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.goals) setGoals(parsed.goals);
        if (parsed.trackerData) setTrackerData(parsed.trackerData);
        if (parsed.notes) setNotes(parsed.notes);
        if (parsed.reward) setReward(parsed.reward);
        if (parsed.targetSuns) setTargetSuns(parsed.targetSuns);
      }
    } catch (error) {
      console.error('Failed to load saved data:', error);
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (isClient) {
      try {
        localStorage.setItem('regulation_chart_data', JSON.stringify({
          goals,
          trackerData,
          notes,
          reward,
          targetSuns,
          lastSaved: new Date().toISOString()
        }));
      } catch (error) {
        console.error('Failed to save data:', error);
      }
    }
  }, [goals, trackerData, notes, reward, targetSuns, isClient]);

  const handleSetWeather = (day: string, goalId: string, weatherId: string) => {
    setTrackerData(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [goalId]: weatherId
      }
    }));
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoalText.trim()) return;
    const newId = 'g_' + Date.now();
    const newGoal: Goal = {
      id: newId,
      text: newGoalText,
      desc: newGoalDesc || 'Self-regulation practice goal.'
    };
    setGoals([...goals, newGoal]);
    
    setTrackerData(prev => {
      const updated = { ...prev };
      DAYS_OF_WEEK.forEach(day => {
        updated[day] = { ...updated[day], [newId]: null };
      });
      return updated;
    });

    setNewGoalText('');
    setNewGoalDesc('');
  };

  const handleDeleteGoal = (id: string) => {
    if (goals.length <= 1) {
      alert("You need at least one active goal on the behavior chart!");
      return;
    }
    setGoals(goals.filter(g => g.id !== id));
  };

  const getStats = () => {
    let rainbows = 0;
    let sunnies = 0;
    let cloudies = 0;
    let stormies = 0;
    let totalScored = 0;

    DAYS_OF_WEEK.forEach(day => {
      goals.forEach(goal => {
        const val = trackerData[day]?.[goal.id];
        if (val === 'rainbow') rainbows++;
        if (val === 'sunny') sunnies++;
        if (val === 'cloudy') cloudies++;
        if (val === 'stormy') stormies++;
        if (val) totalScored++;
      });
    });

    const standardScore = rainbows + sunnies;
    const progressPercent = Math.min(Math.round((standardScore / targetSuns) * 100), 100);

    return { rainbows, sunnies, cloudies, stormies, totalScored, standardScore, progressPercent };
  };

  // Export data as JSON
  const handleExportJSON = () => {
    const dataToExport = {
      exportDate: new Date().toISOString(),
      goals,
      trackerData,
      notes,
      reward,
      targetSuns
    };
    
    const json = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `regulation-chart-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  // Export data as CSV
  const handleExportCSV = () => {
    let csv = 'Date,Goal,Weather,Notes\n';
    
    DAYS_OF_WEEK.forEach(day => {
      goals.forEach(goal => {
        const weather = trackerData[day]?.[goal.id] || '';
        const dayNotes = (notes[day] || '').replace(/,/g, ';').replace(/\n/g, ' ');
        csv += `"${day}","${goal.text}","${weather}","${dayNotes}"\n`;
      });
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `regulation-chart-export-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  // Import data from JSON
  const handleImportJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const parsed = JSON.parse(content);
        
        if (parsed.goals) setGoals(parsed.goals);
        if (parsed.trackerData) setTrackerData(parsed.trackerData);
        if (parsed.notes) setNotes(parsed.notes);
        if (parsed.reward) setReward(parsed.reward);
        if (parsed.targetSuns) setTargetSuns(parsed.targetSuns);
        
        alert('✅ Data imported successfully!');
      } catch (error) {
        alert('❌ Failed to import data. Please check the file format.');
        console.error('Import error:', error);
      }
    };
    reader.readAsText(file);
    
    // Reset input
    event.target.value = '';
  };

  // Clear all data with confirmation
  const handleClearData = () => {
    if (window.confirm('⚠️ This will clear ALL tracked data. Are you sure? This cannot be undone.')) {
      setGoals(INITIAL_GOALS);
      setTrackerData(() => {
        const initial: TrackerData = {};
        DAYS_OF_WEEK.forEach(day => {
          initial[day] = {};
          INITIAL_GOALS.forEach(goal => {
            initial[day][goal.id] = null;
          });
        });
        return initial;
      });
      setNotes(() => {
        const initial: Notes = {};
        DAYS_OF_WEEK.forEach(day => {
          initial[day] = '';
        });
        return initial;
      });
      setReward('15 Minutes of Special 1-on-1 Adventure Time with Mom/Dad (no screens, child-led play!)');
      setTargetSuns(12);
      alert('✅ All data has been cleared.');
    }
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-12">
      <header className="bg-gradient-to-r from-blue-400 via-teal-300 to-amber-200 text-white shadow-md relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-5%] w-64 h-64 bg-amber-200 opacity-30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-48 h-48 bg-teal-200 opacity-20 rounded-full blur-xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-white/25 text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Behaviorist Toolkit for Age 5
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold flex items-center gap-3 drop-shadow-sm">
                <RainbowIcon className="w-10 h-10 drop-shadow-md animate-bounce" /> 
                My Inside Weather Chart
              </h1>
              <p className="text-blue-900/90 font-medium text-sm md:text-base mt-2 max-w-2xl">
                Encouraging positive connection-seeking and emotional self-regulation using a positive reinforcement framework.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-slate-800 shadow-lg border border-white/20 self-start md:self-auto min-w-[240px]">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Weekly Reward Progress</div>
              <div className="flex items-end justify-between mt-1 mb-2">
                <span className="text-2xl font-black text-amber-600">{stats.standardScore} <span className="text-xs text-slate-500 font-normal">/ {targetSuns} Suns + Rainbows</span></span>
                <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                  {stats.progressPercent}% Complete
                </span>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-teal-500 transition-all duration-500 ease-out"
                  style={{ width: `${stats.progressPercent}%` }}
                ></div>
              </div>
              <p className="text-xs text-slate-600 italic mt-2 line-clamp-1">
                🎯 Target: {reward}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 mt-6">
        <div className="flex border-b border-slate-200 gap-1 overflow-x-auto pb-px">
          <button
            onClick={() => setActiveTab('chart')}
            className={`flex items-center gap-2 px-5 py-3 font-semibold text-sm rounded-t-xl transition-all whitespace-nowrap ${
              activeTab === 'chart' 
                ? 'bg-white border-t-2 border-t-blue-500 border-x border-x-slate-200 text-blue-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Weekly Behavior Grid
          </button>
          
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex items-center gap-2 px-5 py-3 font-semibold text-sm rounded-t-xl transition-all whitespace-nowrap ${
              activeTab === 'guide' 
                ? 'bg-white border-t-2 border-t-blue-500 border-x border-x-slate-200 text-blue-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Educator Playbook
          </button>

          <button
            onClick={() => setActiveTab('setup')}
            className={`flex items-center gap-2 px-5 py-3 font-semibold text-sm rounded-t-xl transition-all whitespace-nowrap ${
              activeTab === 'setup' 
                ? 'bg-white border-t-2 border-t-blue-500 border-x border-x-slate-200 text-blue-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
            }`}
          >
            <Settings className="w-4 h-4" />
            Chart Setup & Rewards
          </button>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 mt-6">
        
        {activeTab === 'chart' && (
          <div className="space-y-6">
            
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Weather Key (Behavioral Meanings)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {Object.values(WEATHER_TYPES).map(weather => {
                  const Icon = weather.icon;
                  return (
                    <div key={weather.id} className="flex gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
                      <div className={`p-2 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center ${weather.badgeColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-800">{weather.label} Status</h4>
                        <p className="text-xs text-slate-500 leading-snug mt-0.5">{weather.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-slate-800">Track Daily Behavior Climates</h2>
                  <p className="text-xs text-slate-500">Log your child's successes by selecting the corresponding weather status for each skill.</p>
                </div>
                <button 
                  onClick={() => window.print()} 
                  className="flex items-center gap-1.5 self-start text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-50 px-3 py-1.5 rounded-lg text-slate-700 shadow-xs transition"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print Empty Chart
                </button>
              </div>

              <div className="p-4 space-y-6">
                {DAYS_OF_WEEK.map(day => {
                  const dayRatings = goals
                    .map(g => trackerData[day]?.[g.id])
                    .filter((rating): rating is string => rating !== null && rating !== undefined);
                  const isDayFullyLogged = dayRatings.length === goals.length;

                  return (
                    <div 
                      key={day} 
                      className={`rounded-2xl border transition-all ${
                        isDayFullyLogged 
                          ? 'bg-gradient-to-r from-blue-50/20 to-teal-50/10 border-slate-200' 
                          : 'bg-white border-slate-200'
                      } p-4 md:p-5`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-extrabold text-slate-800">{day}</span>
                          {isDayFullyLogged && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-800">
                              <CheckCircle className="w-3 h-3" /> Fully Tracked
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          {dayRatings.length > 0 ? (
                            <div className="flex gap-2">
                              <span>Today:</span>
                              {dayRatings.map((rating, idx) => {
                                const Type = WEATHER_TYPES[rating.toUpperCase() as WeatherType];
                                const TypeIcon = Type?.icon;
                                return TypeIcon ? (
                                  <span key={idx} className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded font-bold text-[10px] ${Type.badgeColor}`}>
                                    <TypeIcon className="w-3 h-3" />
                                    {Type.label}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          ) : (
                            <span className="italic text-slate-400">Waiting for logs...</span>
                          )}
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-8 space-y-4">
                          {goals.map(goal => {
                            const selectedWeather = trackerData[day]?.[goal.id];
                            return (
                              <div key={goal.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-50/70 rounded-xl border border-slate-100">
                                <div className="max-w-md">
                                  <h4 className="text-sm font-bold text-slate-800">{goal.text}</h4>
                                  <p className="text-xs text-slate-500 mt-0.5">{goal.desc}</p>
                                </div>
                                
                                <div className="flex gap-1.5 self-start sm:self-auto shrink-0">
                                  {Object.values(WEATHER_TYPES).map(weather => {
                                    const Icon = weather.icon;
                                    const isSelected = selectedWeather === weather.id;
                                    return (
                                      <button
                                        key={weather.id}
                                        onClick={() => handleSetWeather(day, goal.id, weather.id)}
                                        title={`Mark as ${weather.label}`}
                                        className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                                          isSelected 
                                            ? `${weather.badgeColor} border-transparent ring-2 ring-offset-2 ring-slate-300 scale-105 shadow-sm`
                                            : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300 hover:bg-slate-50'
                                        }`}
                                      >
                                        <Icon className="w-5 h-5" />
                                        <span className={`text-[9px] mt-1 font-bold ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                                          {weather.label}
                                        </span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="lg:col-span-4 flex flex-col justify-between p-3 bg-amber-50/30 rounded-xl border border-amber-100">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 mb-1">
                              Parent notes for {day}:
                            </label>
                            <textarea
                              value={notes[day]}
                              onChange={(e) => setNotes({...notes, [day]: e.target.value})}
                              placeholder="E.g., Independent play went great! Whined when I took a work call but stopped after 30 seconds."
                              className="w-full h-24 p-2 text-xs bg-white border border-slate-200 rounded-lg focus:ring-1 focus:ring-blue-400 focus:outline-none resize-none"
                            />
                          </div>
                          <div className="mt-2 text-[11px] text-amber-800 leading-relaxed bg-amber-50 p-2 rounded">
                            💡 <strong>Pedagogy Tip:</strong> Log comments immediately when behavior occurs! This helps track what environmental cues triggered the attention-seeking.
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            <div className="lg:col-span-8 space-y-6">
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl text-white">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-800">The Behaviorist Playbook for Age 5</h2>
                    <p className="text-xs text-slate-500">Created specifically to combat attention-seeking behavior and transition to self-regulation.</p>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  <p>
                    For a five-year-old, <strong>attention is the ultimate currency</strong>. When kids can't get attention through positive actions, they quickly learn that negative actions (screaming, interrupting, dropping things, making extreme demands) are highly efficient at getting parents to look, respond, or engage.
                  </p>
                  <p>
                    This weather chart is not designed to "police" behavior. It is a <strong>Differential Reinforcement (DRA)</strong> program. We want to make calm, independent, prosocial behavior <em>incredibly lucrative</em> (earning Suns and Rainbows which yield deep connection time), while making disruptive attention-seeking behavior completely *boring* and unproductive.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-6">
                <h3 className="text-lg font-bold text-slate-800 border-b pb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  Behaviorist Action Guide
                </h3>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50/55 rounded-xl border border-blue-100">
                    <span className="font-extrabold text-blue-800 block text-sm mb-1">Step 1: The "Connection Bucket" Routine (Proactive Strategy)</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Before using the chart, block out <strong>two 10-minute intervals of "Child-Led Play"</strong> each day. Tell your child: <em>"This is our special adventure time. No screens, no interruptions, you are the boss of what we build or play."</em> Fill their connection bucket <strong>proactively</strong> so they don't have to seek it disruptively.
                    </p>
                  </div>

                  <div className="p-4 bg-teal-50/55 rounded-xl border border-teal-100">
                    <span className="font-extrabold text-teal-800 block text-sm mb-1">Step 2: Planned Ignoring (Reactive Strategy)</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      When your child acts out in harmless but disruptive ways (making silly noises while you're on the phone, whining, tugging your sleeve repeatedly), <strong>actively divert your gaze and ignore the action</strong>. Do not negotiate, scold, or maintain eye contact. The exact moment they stop or speak quietly, immediately swing around with massive enthusiasm: <em>"Oh, I love how calmly you are waiting! What did you want to show me?"</em>
                    </p>
                  </div>

                  <div className="p-4 bg-amber-50/55 rounded-xl border border-amber-100">
                    <span className="font-extrabold text-amber-800 block text-sm mb-1">Step 3: Introducing the Weather Chart</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Present this to your child as a collaborative weather mission. Keep it exciting! 
                      <em>"Look! We have a weather station for our home behaviors. When you do your Solo Safari (independent play) or play your Patience game, you get a beautiful Sun or Rainbow! We are trying to collect enough Suns so we can unlock our big family board game night!"</em>
                    </p>
                  </div>

                  <div className="p-4 bg-rose-50/55 rounded-xl border border-rose-100">
                    <span className="font-extrabold text-rose-800 block text-sm mb-1">Step 4: Handling Stormy Days Without Shame</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If a day receives a <strong>Stormy</strong> rating, avoid shame. Frame it as weather passing through: <em>"Even the sky has stormy days sometimes. Storms help us grow, and they always pass. Tomorrow, we can work together to get a sunny sky back!"</em> When your child is regulated, discuss what coping skills can prevent another storm.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Troubleshooting Guide</h3>
                <div className="space-y-4">
                  <details className="group border-b border-slate-100 pb-3">
                    <summary className="font-bold text-sm text-slate-700 cursor-pointer list-none flex justify-between items-center">
                      <span>What if my 5-year-old gets upset seeing a "Cloudy" or "Stormy" rating?</span>
                      <span className="text-xs text-slate-400 group-open:rotate-180 transition">+</span>
                    </summary>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Make ratings fluid! Tell your child: "Your cloud doesn't mean your day is ruined! You can still earn a Sun if you try a calm breathing trick right now to blow that cloud away." Emphasize recovery and progress, not perfect adherence.
                    </p>
                  </details>

                  <details className="group border-b border-slate-100 pb-3">
                    <summary className="font-bold text-sm text-slate-700 cursor-pointer list-none flex justify-between items-center">
                      <span>Should I deduct Suns when bad behavior occurs?</span>
                      <span className="text-xs text-slate-400 group-open:rotate-180 transition">+</span>
                    </summary>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      <strong>No.</strong> In behavior science, taking away earned tokens is called "response cost" and can lead to severe resentment, tantrums, and loss of motivation for a 5-year-old. Once earned, a Sun or Rainbow is *theirs to keep*. They simply lose the chance to earn further points for that specific period if behavior breaks down.
                    </p>
                  </details>

                  <details className="group pb-3">
                    <summary className="font-bold text-sm text-slate-700 cursor-pointer list-none flex justify-between items-center">
                      <span>Why should the rewards be relational rather than material?</span>
                      <span className="text-xs text-slate-400 group-open:rotate-180 transition">+</span>
                    </summary>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Material rewards (toys, candy) satisfy short-term desires but do not address the core functional need of attention-seeking behavior (which is high-quality human connection). By offering rewards like "Reading 3 extra bedtime stories," "Baking a pie together," or "Playing tag at the park," you reinforce that they get *intimate connection* through self-regulation.
                    </p>
                  </details>
                </div>
              </div>

            </div>

            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 shadow-sm">
                <h4 className="font-black text-amber-800 text-sm flex items-center gap-1.5 mb-2">
                  <Heart className="w-4 h-4 text-rose-500" /> Behaviorist Cheat-Sheet
                </h4>
                <ul className="space-y-3 text-xs text-amber-900/90 leading-relaxed list-disc list-inside">
                  <li><strong>Target Specifics:</strong> Praise exactly what they did. Instead of saying "Good job waiting," say "I love how you sat quietly and kept hands to yourself while I wrote that email!"</li>
                  <li><strong>Be Immediate:</strong> Fill out the weather grid closer to the actual events, rather than waiting until right before bed when the child can't remember.</li>
                  <li><strong>The Rule of 5:1:</strong> Ensure your child receives 5 positive interactions (hugs, smiles, specific praises) for every 1 correction or direction you give.</li>
                  <li><strong>Keep it Fun:</strong> Use different colored markers or fun stickers if printing the chart physically!</li>
                </ul>
              </div>

              <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 shadow-lg relative overflow-hidden">
                <div className="absolute top-[-40px] right-[-40px] w-32 h-32 bg-teal-500/20 rounded-full blur-xl"></div>
                <h4 className="font-bold text-sm text-teal-400 mb-2">Developmental Milestone check:</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  At age 5, impulse control is still physically developing in the prefrontal cortex. Independent play of 15 minutes is a realistic, healthy maximum standard. Keep expectations small and expand as your child masters each stage.
                </p>
                <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-3">
                  Consult with your pediatrician or family counselor for personalized behavior intervention.
                </div>
              </div>

            </div>
          </div>
        )}

        {activeTab === 'setup' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 max-w-3xl mx-auto">
            <h2 className="text-xl font-extrabold text-slate-800 mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-500" />
              Customize Your Behavior Goals & Rewards
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Every child's needs are unique. Edit your behavior definitions, tweak target goals, and modify rewards to customize the self-regulation experience.
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-sm text-slate-700 mb-3 flex items-center justify-between">
                <span>Active Goals on Chart ({goals.length})</span>
                <span className="text-xs text-slate-400">Targeting attention-seeking habits</span>
              </h3>

              <div className="space-y-3">
                {goals.map(goal => (
                  <div key={goal.id} className="flex items-start justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <div>
                      <h4 className="font-bold text-sm text-slate-800">{goal.text}</h4>
                      <p className="text-xs text-slate-500 mt-1">{goal.desc}</p>
                    </div>
                    <button 
                      onClick={() => handleDeleteGoal(goal.id)}
                      className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition shrink-0"
                      title="Delete Goal"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <form onSubmit={handleAddGoal} className="mt-4 p-4 border border-dashed border-slate-200 bg-slate-50/50 rounded-xl space-y-3">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Plus className="w-3 h-3" /> Add Custom Goal
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Goal Title (Keep it fun & playful!):</label>
                    <input 
                      type="text" 
                      placeholder="E.g., Quiet Hands, Waiting Game, Friendly Talking" 
                      value={newGoalText}
                      onChange={(e) => setNewGoalText(e.target.value)}
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Detailed Description (Explaining what success looks like):</label>
                    <input 
                      type="text" 
                      placeholder="E.g., I played without shouting or grabbing for mom's arm during phone calls." 
                      value={newGoalDesc}
                      onChange={(e) => setNewGoalDesc(e.target.value)}
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs rounded-lg shadow-xs transition"
                >
                  Insert New Goal to Weekly Chart
                </button>
              </form>
            </div>

            <div className="border-t border-slate-200 pt-6 space-y-6">
              <h3 className="font-bold text-sm text-slate-700">Define Your Incentive System</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-600 mb-1 font-semibold">
                    Target Suns + Rainbows (Weekly Goal):
                  </label>
                  <p className="text-[10px] text-slate-400 mb-1.5">
                    We suggest starting with a small, achievable target first, then raising it as they grow!
                  </p>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      min="1" 
                      max="50" 
                      value={targetSuns}
                      onChange={(e) => setTargetSuns(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 p-2 text-sm bg-white border border-slate-300 rounded-lg text-center font-bold focus:outline-none"
                    />
                    <span className="text-xs text-slate-500 font-medium">Suns / Rainbows needed</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-600 mb-1 font-semibold">
                    Custom Connection Reward Description:
                  </label>
                  <p className="text-[10px] text-slate-400 mb-1.5">
                    Connection-focused rewards feed the actual root need. Avoid material toys!
                  </p>
                  <input 
                    type="text" 
                    value={reward}
                    onChange={(e) => setReward(e.target.value)}
                    placeholder="E.g., Baking chocolate chip cookies together on Saturday"
                    className="w-full p-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="p-4 bg-teal-50 rounded-xl border border-teal-100 flex gap-3">
                <Info className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div className="text-xs text-teal-800 leading-relaxed">
                  <strong>Recommended Target Formula:</strong> At age 5, tracking 3 goals over 7 days equals 21 potential weather logs. A target of <strong>10 to 12 Suns / Rainbows</strong> is a healthy sweet spot for their first week to guarantee confidence and success!
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6 space-y-6">
              <h3 className="font-bold text-sm text-slate-700 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Data Backup & Management
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-sm text-blue-800 mb-2 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Export Data
                  </h4>
                  <p className="text-xs text-blue-700 mb-3">
                    Save your tracking data as a backup. You can restore it anytime.
                  </p>
                  <div className="space-y-2">
                    <button
                      onClick={handleExportJSON}
                      className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs rounded-lg transition flex items-center justify-center gap-2"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Export as JSON (Full Backup)
                    </button>
                    <button
                      onClick={handleExportCSV}
                      className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs rounded-lg transition flex items-center justify-center gap-2"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Export as CSV (Spreadsheet)
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <h4 className="font-bold text-sm text-purple-800 mb-2 flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Import Data
                  </h4>
                  <p className="text-xs text-purple-700 mb-3">
                    Restore data from a previously exported JSON file.
                  </p>
                  <label className="w-full py-2 px-3 bg-purple-500 hover:bg-purple-600 text-white font-bold text-xs rounded-lg transition cursor-pointer flex items-center justify-center gap-2">
                    <Upload className="w-3.5 h-3.5" />
                    Import from JSON
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportJSON}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div className="p-4 bg-rose-50 rounded-xl border border-rose-100">
                <h4 className="font-bold text-sm text-rose-800 mb-2">⚠️ Danger Zone</h4>
                <p className="text-xs text-rose-700 mb-3">
                  Reset everything to start fresh. This will clear all goals, tracking data, and notes.
                </p>
                <button
                  onClick={handleClearData}
                  className="w-full py-2 bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs rounded-lg transition"
                >
                  Clear All Data
                </button>
              </div>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3">
                <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-800 leading-relaxed">
                  <strong>💾 Data Storage:</strong> All data is automatically saved to your browser's local storage and persists across sessions. We recommend exporting a backup regularly for added security!
                </div>
              </div>
            </div>

          </div>
        )}

      </main>

      <footer className="max-w-6xl mx-auto px-4 mt-12 text-center text-slate-400 text-xs">
        <p>© educator-behaviorist developmental models. Designed to foster emotional intelligence and connection in early childhood.</p>
      </footer>

      <div id="print-area" className="hidden print:block bg-white text-black p-8 max-w-4xl mx-auto">
        <div className="border-b-2 border-black pb-4 mb-6">
          <h1 className="text-3xl font-black uppercase tracking-wider">My Inside Weather Chart</h1>
          <p className="text-sm mt-1">A weekly tool for calm self-regulation and family connection.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border p-4 rounded">
            <h3 className="font-bold text-xs uppercase tracking-widest text-slate-600">Weekly Target Reward:</h3>
            <p className="text-sm font-semibold mt-1">{reward}</p>
          </div>
          <div className="border p-4 rounded flex items-center justify-between">
            <div>
              <h3 className="font-bold text-xs uppercase tracking-widest text-slate-600">Goal Milestone:</h3>
              <p className="text-sm font-semibold mt-1">Earn {targetSuns} Suns / Rainbows!</p>
            </div>
            <div className="border-2 border-black h-10 w-10 flex items-center justify-center font-black rounded-full text-lg bg-yellow-50">
              ☀️
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-xs uppercase tracking-wider border-b pb-1 mb-2">Our Weekly Mission:</h3>
          <ul className="space-y-2">
            {goals.map((g, i) => (
              <li key={g.id} className="text-xs">
                <strong>Goal {i+1}: {g.text}</strong> — {g.desc}
              </li>
            ))}
          </ul>
        </div>

        <table className="w-full border-collapse border border-black mb-6 text-xs">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-black p-2 text-left w-1/4">Day of the Week</th>
              {goals.map((g, i) => (
                <th key={g.id} className="border border-black p-2 text-center">Goal {i+1} Rating</th>
              ))}
              <th className="border border-black p-2 text-left w-1/4">Notes / Successes</th>
            </tr>
          </thead>
          <tbody>
            {DAYS_OF_WEEK.map(day => (
              <tr key={day} className="h-16">
                <td className="border border-black p-2 font-bold">{day}</td>
                {goals.map(g => (
                  <td key={g.id} className="border border-black p-2 text-center">
                    <div className="flex justify-around items-center h-full gap-1">
                      <span className="border rounded-full p-1 opacity-25">🌈</span>
                      <span className="border rounded-full p-1 opacity-25">☀️</span>
                      <span className="border rounded-full p-1 opacity-25">☁️</span>
                      <span className="border rounded-full p-1 opacity-25">⚡</span>
                    </div>
                  </td>
                ))}
                <td className="border border-black p-2"></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="border p-4 rounded bg-slate-50 text-[10px] space-y-1">
          <h4 className="font-bold">Weather Guide for Families:</h4>
          <p>🌈 <strong>Rainbow:</strong> Outstanding! Used words, went above and beyond, or practiced co-regulation independent of adults.</p>
          <p>☀️ <strong>Sunny:</strong> Doing awesome! Followed instructions, played peacefully, or waited with a quiet voice.</p>
          <p>☁️ <strong>Cloudy:</strong> Feeling restless. Needed some direct support or redirect to prevent disruptive behavior.</p>
          <p>⚡ <strong>Stormy:</strong> Needed a safe cooldown pause to reset. Remember, we always repair and try again tomorrow!</p>
        </div>
      </div>

    </div>
  );
}

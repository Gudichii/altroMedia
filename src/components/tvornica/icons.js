const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const Check = (props) => (
  <svg {...base} width={18} height={18} {...props}><path d="M20 6 9 17l-5-5" /></svg>
);

export const Plus = (props) => (
  <svg {...base} {...props}><path d="M12 5v14M5 12h14" /></svg>
);

export const Menu = (props) => (
  <svg {...base} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);

export const Close = (props) => (
  <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>
);

export const Arrow = (props) => (
  <svg {...base} width={18} height={18} {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

const set = {
  funnel: <path d="M3 4h18l-7 8v7l-4 2v-9L3 4Z" />,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.2 2.7-5.2 6-5.2s6 2 6 5.2" /><path d="M17 8.2a3 3 0 0 1 0 5.6M18 20c0-2.2-.8-3.8-2-4.8" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
  chat: <><path d="M21 12a7.6 7.6 0 0 1-8 7.5L7 21l1.2-3A7.6 7.6 0 1 1 21 12Z" /><path d="M9 11h6M9 14.5h3.5" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2.5" /><path d="M3 10h18M8 3v4M16 3v4" /><circle cx="12" cy="15" r="1.3" fill="currentColor" stroke="none" /></>,
  play: <><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="m10.5 9.5 4.5 2.6-4.5 2.6V9.5Z" /></>,
  bolt: <path d="M13.5 2 4 13.5h6L9.5 22 20 10.5h-6.5L13.5 2Z" />,
  card: <><rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="M2.5 9.8h19M6 15h4" /></>,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />,
  chart: <><path d="M4 20V4M4 20h16" /><path d="M8 20v-6M13 20V8M18 20v-9" /></>,
  form: <><rect x="4" y="3" width="16" height="18" rx="2.5" /><path d="M8 8h8M8 12h8M8 16h4" /></>,
  phone: <><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M10.5 18.5h3" /></>,
  rocket: <><path d="M12 3c3.5 2 5.5 5.5 5.5 9.5L15 15H9l-2.5-2.5C6.5 8.5 8.5 5 12 3Z" /><circle cx="12" cy="10" r="1.6" /><path d="M9 15c-1.5 1.2-2 3-2 5 2 0 3.8-.6 5-2M15 15c1.5 1.2 2 3 2 5-2 0-3.8-.6-5-2" /></>,
  shield: <><path d="M12 3 5 6v6c0 4 3 7.4 7 9 4-1.6 7-5 7-9V6l-7-3Z" /><path d="m9 12 2.2 2.2L15.5 10" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5.3l3.3 2" /></>,
};

export const Icon = ({ name, ...props }) => (
  <svg {...base} {...props}>{set[name] || set.bolt}</svg>
);

export default Icon;

import Typography from "typography";
import sternGroveTheme from 'typography-theme-stern-grove'
const typography = new Typography(
 {
     baseFontSize: '18px',
     baseLineHeight: 1.666,
     headerFontFamily: ['Monsterrat', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
     bodyFontFamily: ['Georgia', 'serif'],
 },
 sternGroveTheme
);

export default typography;
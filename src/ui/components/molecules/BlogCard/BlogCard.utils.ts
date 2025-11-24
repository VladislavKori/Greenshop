export const getMonthDayFromDate = (date: string): string => {
    const dateObj = new Date(date);
    const monthName = dateObj.toLocaleString('ru-RU', { month: 'long' });
    const dateValue = dateObj.getDate(); 

    return `${monthName} ${dateValue}`
} 
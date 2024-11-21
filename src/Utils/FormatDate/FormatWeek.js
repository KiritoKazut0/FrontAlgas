export const formatWeekData = (data) => {
    const daysOfWeek = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
    const weekData = new Array(7).fill(0); 
    let total = 0;

    if (data.length === 0) {
        return {
            data: weekData,
            labels: daysOfWeek,
            average: 0,
        };
    }


    const lastDay = new Date(Math.max(...data.map(entry => new Date(entry.period))));
    const startOfWeek = new Date(lastDay);
    startOfWeek.setDate(lastDay.getDate() - (lastDay.getDay() - 1));


    data.forEach((entry) => {
        const date = new Date(entry.period);
        const dayIndex = date.getDay();
        weekData[dayIndex] = entry.averages.hydrogen;
    });

    for (let i = 1; i <= lastDay.getDay(); i++) {
        total += weekData[i]; 
    }

   
    const daysInRange = lastDay.getDay(); 
    const promedio = daysInRange > 0 ? total / daysInRange : 0;

    return {
        data: weekData, 
        labels: daysOfWeek,
        average: promedio, 
    };
};
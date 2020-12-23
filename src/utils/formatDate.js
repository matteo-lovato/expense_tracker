const formatDate = date => {
    const d = new Date(date);
    // months start at 0
    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    const year = `${d.getFullYear()}`;

    // 01 instead of 1 for the month
    if (month.length < 2) {
        month = `0${month}`;
    }
    // 04 instead of 4 for the day
    if (day.length < 2) {
        day = `0${day}`;
    }
    return [year, month, day].join("-");
};

export default formatDate;

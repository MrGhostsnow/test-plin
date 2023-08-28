const translateDay = (dayOfWeek) => {
  const daysOfWeek = {
    Sunday: "Domingo",
    Monday: "Segunda-feira",
    Tuesday: "Terça-feira",
    Wednesday: "Quarta-feira",
    Thursday: "Quinta-feira",
    Friday: "Sexta-feira",
    Saturday: "Sábado",
  };

  return daysOfWeek[dayOfWeek] || dayOfWeek;
};

export default translateDay;

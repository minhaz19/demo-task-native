import { taskData } from "../../../assets/utils/taskData";

export const mealsAndDates = (rangeOfDate) => {
  const totalDays = taskData.map((details) => details.calendar.dateToDayId);
  const dateId =
    rangeOfDate && totalDays.map((date) => rangeOfDate.map((day) => date[day]));
  //   console.log("dateId", dateId);
  const daysWithDetails = taskData.map(
    (details) => details.calendar.daysWithDetails
  );
  //   //   console.log("daysWithDetails", daysWithDetails);
  const meals =
    dateId &&
    daysWithDetails.map((meal) => dateId.map((i) => i?.map((a) => meal[a])));
//   console.log("meals", meals);
    const output =
      rangeOfDate &&
      meals.map((x) =>
        x.map((y) =>
          y.map(
            (z) =>
              Object.keys(
                typeof z !== "undefined" && z?.details?.mealsWithDetails
              ).length
          )
        )
      );
    //   console.log("output", output);
    const sum =
      output && output.map((a, index) => a[index]?.reduce((a, b) => a + b, 0));
    sum && sum.map((sm, i) => (taskData[i].mealTaken = sm));
    // console.log("sum", sum);
  return taskData;
};

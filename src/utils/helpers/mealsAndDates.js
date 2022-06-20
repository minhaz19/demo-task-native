import { taskData } from "../../../assets/utils/taskData";

export const mealsAndDates = (dateRange) => {
  const totalDays = taskData.map((details) => details.calendar.dateToDayId);
  const dateId =
    dateRange && totalDays.map((date) => dateRange?.map((dt) => date[dt]));

  const daysWithDetails = taskData.map(
    (details) => details.calendar.daysWithDetails
  );
  const meals =
    dateId &&
    daysWithDetails.map((meal) => dateId.map((i) => i?.map((a) => meal[a])));
  const output =
    dateRange &&
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
  const sum =
    output && output.map((a, index) => a[index]?.reduce((a, b) => a + b, 0));
  sum && sum.map((sm, i) => (taskData[i].mealTaken = sm));
  return sum;
};

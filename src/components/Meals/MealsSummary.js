import React from 'react';
import classes from './MealsSummary.module.css';

function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2 className={classes.summary}>Delicious Food, Delivered to You</h2>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoya delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced Chefs!
      </p>
    </section>
  );
}

export default MealsSummary;

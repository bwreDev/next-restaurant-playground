import {
  appetizers,
  salads,
  entrees,
  pastas,
  burgers,
  sandwiches,
  tacos,
  pizzas,
  subs,
  kids,
  desserts,
} from '../../../data';

export default function handler({ query: { id } }, res) {
  const filtered = appetizers.filter(
    (appetizer) => appetizer.id === id
  );

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({
        message: `Appetizer with the id of ${id} is not found`,
      });
  }
}

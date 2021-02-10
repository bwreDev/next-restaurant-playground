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

export default function handler(req, res) {
  res.status(200).json(appetizers);
}

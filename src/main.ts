import './style.css'

const randomNumGenerator = (n: number, m: number): number => {
  const range = Math.abs(n - m);
  const numInRange = Math.round(Math.random() * range);
  const minNum = Math.min(n, m);
  return numInRange + minNum;
}

const result = randomNumGenerator(1, 10);
console.log(result)

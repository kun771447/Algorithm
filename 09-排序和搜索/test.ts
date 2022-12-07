interface Person {
  name: string; // 保持不变
  age: number;
}

type t = Pick<Person, "name" | 'age'>;
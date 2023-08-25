import {
  InfiniteTable,
  DataSource,
  InfiniteTablePropColumns,
} from "@infinite-table/infinite-react";

type Person = {
  Id: number;
  FirstName: string;
  Age: number;
};

const columns: InfiniteTablePropColumns<Person> = {
  id: {
    // specifies which field from the data source
    // should be rendered in this column
    field: "Id",
    type: "number",
    defaultWidth: 80,
  },

  firstName: {
    field: "FirstName",
    header: "First Name",
  },
  age: { field: "Age", type: "number" },
};

const data: Person[] = [
  {
    Id: 1,
    FirstName: "Bobby",
    Age: 3,
  },
  {
    Id: 2,
    FirstName: "Alice",
    Age: 50,
  },
  {
    Id: 3,
    FirstName: "Bill",
    Age: 5,
  },
  {
    Id: 4,
    FirstName: "John",
    Age: 10,
  },
  {
    Id: 5,
    FirstName: "Jane",
    Age: 20,
  },
  // generate 10 more rows
  ...Array.from({ length: 10 }, (_, i) => ({
    Id: i + 6,
    FirstName: `Person ${i + 6}`,
    Age: Math.floor(Math.random() * 100),
  })),
];

export default function App() {
  return (
    <DataSource<Person> data={data} primaryKey="Id">
      <InfiniteTable<Person>
        columns={columns}
        domProps={{
          style: {
            height: "100%",
          },
        }}
      />
    </DataSource>
  );
}

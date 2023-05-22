const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

export default async function Home() {
  const res = await fetch(`${API_URL}/api/news?populate=preview`, {
    headers: {
      authorization: `bearer ${API_TOKEN}`,
    },
  });

  const { data } = await res.json();

  return (
    <div className="flex p-5 flex-col gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="border border-gray-400 p-5 rounded max-w-[400px]"
        >
          <div>{item.attributes.title}</div>
          <div>{item.attributes.description}</div>
          <img src={item.attributes.preview.data.attributes.url} />
        </div>
      ))}
    </div>
  );
}

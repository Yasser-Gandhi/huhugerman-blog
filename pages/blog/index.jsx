import Layout from "../../components/Layout";
import Link from "next/link";

export default function index({data}) {
  console.log(data)
  return (
    <Layout>
      <h1>Lista de entradas</h1>
      {data.map(({id, title, body}) => (
        <div key={id}>
          <h3 className="titlePost">
            <Link href={`/blog/${id}`}>
            <a>
             {title}
            </a>
            </Link>
          </h3>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  }catch(err){
    console.log(err)
  }
}


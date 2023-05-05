import Link from "next/link"

export default function Home() {
  let name= 'park';
  let link = 'http://google.com'
  return (
    <div>
      <h1 className="title">종말</h1>
      <p className="title-sub">for your apocalypse, dear {name}.</p>
    </div>
  )
}


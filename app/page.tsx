import { TacticForm } from './TacticForm'

async function getTactics() {
  return []
}

export default async function Home() {
  const tactics = await getTactics()
  return (
    <main className="flex flex-col min-h-screen justify-between p-4">
      <div className="grid grid-flow-col gap-8 grid-cols-12 justify-between">
        <section className="flex flex-col justify-start gap-4 col-span-4">
          <h2>Create</h2>

          <TacticForm />
        </section>
      </div>
    </main>
  )
}

// Ce composant affiche la liste des assignments
// Il prend en props le tableau d'assignments
function randomPhrase() {
  const phrases = [
    "s’apprête à traumatiser",
    "gachera le noël de",
    "va écœurer",
    "va plomber les fêtes de",
    "va désespérer",
    "va pourrir la journée de",
    "promet un moment gênant à",
    "garantit une ambiance glaciale à",]

  const randomphrase = phrases[Math.floor(Math.random() * phrases.length)];
  return randomphrase;
}
export function AssignmentDisplay({ assignments }) {

  return (
    <div className="absolute top-0 h-screen w-screen p-4">
      <h2 className="text-2xl font-nextcustom uppercase text-red-700 mb-8 mt-4 text-center">Distribution</h2>
      <ul className="space-y-5 h-[70%] overflow-scroll">
        {assignments.map((assignment, index) => (
          <li key={index} className="flex justify-center gap-2 items-center">
            <p className="bg-[url('/texture/carton.jpg')] font-pinkend text-2xl px-4">{assignment.giver}</p>
            <p className="text-center">{randomPhrase()}</p>
            <p className="bg-[url('/texture/carton.jpg')] font-pinkend text-2xl px-4">{assignment.receiver}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
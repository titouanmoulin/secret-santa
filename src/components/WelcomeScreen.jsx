// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="text-center space-y-6 absolute top-0 h-screen w-screen">
      <h1 className="text-4xl font-bold text-primary font-nextcustom">Secret Santa</h1>
      <img src="cigarettes.png" alt="cigarettes" className="absolute bottom-0 left-[50%] translate-x-[-50%]"/>
      <img src="bieres.png" alt="bieres" className="absolute bottom-[10%]"/>
      <img src="papanoel.png" alt="papanoel" className="absolute bottom-[10%] left-[50%] translate-x-[-50%]" />
      <button onClick={onStart} className="button absolute bottom-[25%] left-[50%] translate-x-[-50%] bg-[url('/texture/carton.jpg')] w-72 h-24 -rotate-6 uppercase before:content-[url('mains.png')] after:content-[url('mains.png')] flex gap-24 items-center justify-center font-pinkend text-2xl">Créer une partie</button>
    </div>
  );
}

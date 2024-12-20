import ShortTermGoal from "../ui/ShortTermGoal/ShortTermGoal";
import LongTermGoal from "../ui/LongTermGoal/LongTermGoal";

export default function Goals() {
  return (
    <section className="flex flex-col items-center justify-evenly h-screen py-[4em] px-[8em] overflow-hidden bg-[--background-primary] gap-y-8 z-30">
      {/* OBJETIVOS A CORTO PLAZO*/}
      <ShortTermGoal />
      {/* OBJETIVOS A LARGO PLAZO*/}
      <LongTermGoal />
    </section>
  );
}

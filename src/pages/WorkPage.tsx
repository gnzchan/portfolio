import { ContainedContent } from "@/components/ContainedContent";

function WorkPage() {
  return (
    <div className="flex flex-col">
      <ContainedContent>
        <div className="flex h-[calc(100vh-6rem)] min-h-[500px] flex-col items-center justify-center">
          <div className="w-min pb-24">
            <p className="mb-4 text-5xl md:text-9xl">CHRISTIAN GONZALES</p>
            <p className="md:text-2xl">Software Engineer</p>
          </div>
        </div>
      </ContainedContent>

      <ContainedContent>
        <p>work</p>
      </ContainedContent>
    </div>
  );
}

export default WorkPage;

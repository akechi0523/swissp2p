
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Support from "@/components/Support/Support";
export default function Buy() {
  return (
    <>
      <DefaultLayout>
        <div className="md:pr-16">
          <div className="font-medium text-xl text-primary dark:text-white mb-5">Support</div>
          <div className="flex flex-wrap md:flex-nowrap md:gap-12 gap-6">
            <div className="flex md:w-1/2 w-full flex-col md:gap-8 gap-6">
              <Support />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
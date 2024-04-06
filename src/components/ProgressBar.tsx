interface ProgressBarProps {
  percentage: number;
  barTitle?: string;
}

function ProgressBar({ percentage, barTitle }: ProgressBarProps) {
  return (
    <section>
      {/* title */}
      {barTitle && <h2 className="text-start">{barTitle}</h2>}

      {/* progress bar */}
      <div className=" bg-[#d8dee3] rounded-sm w-[100%] relative">
        <div
          className="p-2 bg-[#1aad9e] rounded-sm z-50"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </section>
  );
}

export default ProgressBar;

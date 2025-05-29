import React from "react";

const Warning = ({ bg }) => {
  return (
    <div className="container m-auto my-4 px-4 md:px-0">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold px-4"
        >
          UYARI
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div style={{ backgroundColor: bg }} className="p-4 rounded-md">
        <div className="mt-4">
          <div className="flex items-start mb-2">
            <span className="bg-[var(--label12)] text-white min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full mr-2 font-semibold">
              !
            </span>
            <p className="text-[12px]">
              Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula.
              Viverra adipiscing at in tellus integer feugiat scelerisque varius
              morbi. Sollicitudin nibh sit amet commodo nulla facilisi nullam
              vehicula. Viverra adipiscing at in tellus integer feugiat
              scelerisque varius morbi. Sollicitudin nibh sit amet commodo nulla
              facilisi nullam vehicula. Viverra adipiscing at in tellus integer
              feugiat scelerisque varius morbi.
            </p>
          </div>
          <div className="flex items-start mb-2">
            <span className="bg-[var(--label4)] text-white min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full mr-2 font-semibold">
              !
            </span>
            <p className="text-[12px]">
              Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.
              Tortor dignissim convallis aenean et tortor at risus.Nulla
              facilisi nullam vehicula ipsum a arcu cursus vitae congue. Tortor
              dignissim convallis aenean et tortor at risus.Nulla facilisi
              nullam vehicula ipsum a arcu cursus vitae congue. Tortor dignissim
              convallis aenean et tortor at risus.
            </p>
          </div>
          <div className="flex items-start mb-2">
            <span className="bg-[var(--label7)] text-white min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full mr-2 font-semibold">
              !
            </span>
            <p className="text-[12px]">
              Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.
              Tortor dignissim convallis aenean et tortor at risus. Nulla
              facilisi nullam vehicula ipsum a arcu cursus vitae congue. Tortor
              dignissim convallis aenean et tortor at risus.Nulla facilisi
              nullam vehicula ipsum a arcu cursus vitae congue. Tortor dignissim
              convallis aenean et tortor at risus.
            </p>
          </div>
          <div className="flex items-start mb-2">
            <span className="bg-[var(--label2)] text-white min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full mr-2 font-semibold">
              !
            </span>
            <p className="text-[12px]">
              Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula.
              Viverra adipiscing at in tellus integer feugiat scelerisque varius
              morbi. Sollicitudin nibh sit amet commodo nulla facilisi nullam
              vehicula. Viverra adipiscing at in tellus integer feugiat
              scelerisque varius morbi. Sollicitudin nibh sit amet commodo nulla
              facilisi nullam vehicula. Viverra adipiscing at in tellus integer
              feugiat scelerisque varius morbi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warning;

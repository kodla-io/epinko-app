import React from "react";

const content = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    text: "Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    images: ["https://placehold.co/800x400"],
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor Sit Amet",
    text: "Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    images: ["https://placehold.co/800x400"],
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor Sit Amet",
    text: `Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    images: ["https://placehold.co/400x400", "https://placehold.co/400x400"],
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolor Sit Amet",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. `,
    images: ["https://placehold.co/800x400"],
  },
];

const HowToBuyAd = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--advert-list-bg)",
      }}
      className="p-4 rounded-lg"
    >
      {content.map((item) => (
        <div key={item.id} className="mb-8">
          <div className="flex items-center mb-2">
            <h3 className="text-[var(--success)] md:text-[35px] text-xl font-bold mr-2">{item.id}</h3>
            <h3 className="text-[var(--foreground)] md:text-[35px] text-xl font-bold">
              {item.title.toUpperCase()}
            </h3>
          </div>

          {item.id === 4 ? (
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4">
              <div className="flex-noneb w-full md:w-1/2 mb-4 md:mb-0">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 text-[var(--foreground)] max-h-[400px] md:overflow-y-hidden overflow-y-scroll">
                <p>{item.text}</p>
              </div>
            </div>
          ) : (
            <>
              <p className="text-[var(--foreground)] mb-4">{item.text}</p>
              <div className="mb-4">
                {item.images.length === 1 ? (
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full max-w-full h-[400px] object-cover rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                    {item.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${item.title} ${index + 1}`}
                        className="w-full md:w-1/2 h-[400px] object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default HowToBuyAd;

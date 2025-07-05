import React from "react";
import { FaEye } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Link from "next/link";

const NewsDetail = () => {
  const newsList = [
    {
      image: "https://placehold.co/100x100",
      date: "25-10-2022",
      views: 157,
      title:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor",
    },
    {
      image: "https://placehold.co/100x100",
      date: "25-10-2022",
      views: 157,
      title:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor",
    },
    {
      image: "https://placehold.co/100x100",
      date: "25-10-2022",
      views: 157,
      title:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor",
    },
    {
      image: "https://placehold.co/100x100",
      date: "25-10-2022",
      views: 157,
      title:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor",
    },
    {
      image: "https://placehold.co/100x100",
      date: "25-10-2022",
      views: 157,
      title:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor",
    },
    {
      image: "https://placehold.co/100x100",
      date: "25-10-2022",
      views: 157,
      title:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor",
    },
  ];

  return (
    <div className="container m-auto flex flex-wrap md:flex-nowrap w-full min-h-screen text-[var(--foreground)] p-4 gap-4">
      <div className="md:w-5/7 w-full ">
        {/* Ana görsel */}
        <div className="flex flex-col gap-4 bg-[var(--advert-list-bg)] p-4 rounded-md">
          <img
            src="https://placehold.co/1000x500"
            alt="Main"
            className="object-cover max-h-[200px] min-h-[200px] md:max-h-[500px] md:min-h-[500px] w-full h-auto rounded-lg"
          />

          {/* Tarih ve Görüntüleme */}
          <div className="flex items-center text-sm gap-4 text-[var(--text-gray)]">
            <span className="flex items-center">
              <SlCalender className="mr-2" />
              25-10-2022
            </span>
            <span className="flex items-center">
              <FaEye className="mr-2" /> 197 Görüntülenme
            </span>
          </div>

          {/* Başlık */}
          <h1 className="text-2xl font-bold leading-snug">
            Amet Tellus Cras Adipiscing Enim Eu Turpis. Facilisis Magna Etiam
            Tempor Orci Cras Adipiscing Enim Eu.
          </h1>

          {/* Paragraflar */}
          <div className="flex flex-col gap-4 text-[var(--text-gray)] text-sm leading-relaxed">
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
              elementum pulvinar etiam non. Eu turpis egestas pretium aenean.
              Varius duis at consectetur lorem donec massa. Sed enim ut sem
              viverra aliquet eget sit amet tellus. Tellus in hac habitasse
              platea dictumst vestibulum rhoncus est pellentesque. Purus ut
              faucibus pulvinar elementum. Feugiat sed lectus vestibulum mattis
              ullamcorper velit. Aliquet sagittis id consectetur purus ut
              faucibus pulvinar elementum. Urna condimentum mattis pellentesque
              id nibh tortor. Duis convallis convallis tellus id. Commodo
              ullamcorper a lacus vestibulum sed arcu. Faucibus interdum posuere
              lorem ipsum dolor sit amet consectetur adipiscing. Orci nulla
              pellentesque dignissim enim sit amet venenatis urna. Proin sed
              libero enim sed. Elit duis tristique sollicitudin nibh sit. Etiam
              non quam lacus suspendisse faucibus interdum posuere lorem ipsum.
              Eu lobortis elementum nibh tellus molestie. Adipiscing bibendum
              est ultricies integer quis auctor elit.
            </p>
            <p className="text-justify">
              Euismod in pellentesque massa placerat duis ultricies lacus. Morbi
              tincidunt ornare massa eget egestas purus viverra accumsan. Nullam
              ac tortor vitae purus faucibus ornare. Faucibus et molestie ac
              feugiat sed lectus vestibulum mattis ullamcorper. Nullam vehicula
              ipsum a arcu cursus vitae congue mauris. Aliquam malesuada
              bibendum arcu vitae elementum curabitur vitae nunc sed. Sed tempus
              urna et pharetra pharetra massa massa ultricies mi. Mus mauris
              vitae ultricies leo integer malesuada nunc. Velit sed ullamcorper
              morbi tincidunt ornare massa eget egestas. Nibh tortor id aliquet
              lectus proin nibh. Porttitor leo a diam sollicitudin. Diam quam
              nulla porttitor massa id neque aliquam vestibulum morbi. Ut
              faucibus pulvinar elementum integer. Ullamcorper velit sed
              ullamcorper morbi tincidunt. In arcu cursus euismod quis viverra
              nibh cras pulvinar mattis. Enim praesent elementum facilisis leo
              vel fringilla est ullamcorper. Volutpat sed cras ornare arcu dui
              vivamus. Quis viverra nibh cras pulvinar. Dolor sit amet
              consectetur adipiscing elit duis tristique.
            </p>
            <p className="text-justify">
              Ac placerat vestibulum lectus mauris. Lectus arcu bibendum at
              varius vel pharetra. Scelerisque fermentum dui faucibus in ornare
              quam. A condimentum vitae sapien pellentesque habitant morbi.
              Pellentesque elit ullamcorper dignissim cras tincidunt lobortis
              feugiat vivamus at. Dignissim convallis aenean et tortor at risus.
              Enim blandit volutpat maecenas volutpat blandit aliquam. Accumsan
              sit amet nulla facilisi. Elementum integer enim neque volutpat ac
              tincidunt. Scelerisque purus semper eget duis at tellus at urna.
              Commodo viverra maecenas accumsan lacus vel facilisis volutpat.
              Condimentum vitae sapien pellentesque habitant morbi tristique. Ut
              etiam sit amet nisl purus in mollis nunc. A diam maecenas sed enim
              ut sem viverra. Faucibus purus in massa tempor nec. Bibendum est
              ultricies integer quis auctor elit sed vulputate. Cursus eget nunc
              scelerisque viverra mauris in.
            </p>
            <p className="text-justify">
              Amet tellus cras adipiscing enim eu turpis. Facilisis magna etiam
              tempor orci eu. Faucibus pulvinar elementum integer enim neque.
              Elementum sagittis vitae et leo.
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-2/7 w-full flex flex-col gap-6">
        {/* Benzer Haberler */}
        <div className="rounded-lg">
          <div className="w-full p-2 rounded-md bg-[var(--advert-list-bg)] mb-4">
            <h2 className="text-lg font-semibold">Benzer Haberler</h2>
          </div>

          <div className="flex flex-col gap-4">
            {[1, 2].map((item) => (
              <Link
              href="/news-detail"
                key={item}
                className="flex flex-col bg-[var(--advert-list-bg)] p-3 rounded-md gap-2"
              >
                <img
                  src="https://placehold.co/300x150"
                  alt="Benzer Haber"
                  className="object-cover w-full h-auto rounded"
                />
                <div className="text-xs text-[var(--text-gray)] flex justify-between">
                  <span className="flex items-center">
                    <SlCalender className="mr-2" />
                    25-10-2022
                  </span>
                  <span className="flex items-center">
                    <FaEye className="mr-2" />
                    197 Görüntülenme
                  </span>
                </div>
                <p className="text-sm font-semibold clamp-2 min-h-[40px]">
                  Pellentesque Elit Ullamcorper Dignissim Cras Tincidunt
                  Lobortis
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Duyurular */}
        <div className="rounded-lg">
          <div className="w-full p-2 rounded-md bg-[var(--advert-list-bg)] mb-4">
            <h2 className="text-lg font-semibold">Duyurular</h2>
          </div>
          <div className="flex flex-col gap-4">
            {newsList.map((item, index) => (
              <Link
              href="/news-detail"
                key={index}
                className="bg-[var(--advert-list-bg)] rounded-xl p-4 flex gap-4 items-center"
              >
                <img
                  src={item.image}
                  alt="haber görseli"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex flex-col text-sm text-[var(--foreground)]">
                  <div className="flex items-center gap-4 text-xs mb-1">
                    <span className="flex items-center gap-1">
                      <SlCalender className="mr-1" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaEye className="mr-1" />
                      {item.views} Görüntüleme
                    </span>
                  </div>
                  <p className="text-[var(--foreground)] font-semibold leading-snug clamp-2 min-h-[40px]">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;

import React from "react";

const ImageTextScrollComponent = () => {
  return (
    <div className="p-2">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold"
        >
          AÇIKLAMA
        </h2>
        <div className="flex-1 flex-wrap h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Sol kısım: Resim */}
        <div className="flex w-full md:w-1/3 max-h-[400px] md:mb-0 mb-3">
          <img
            src="https://placehold.co/400"
            alt="Description"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Sağ kısım: Metin */}
        <div className="flex-1 w-full md:w-2/3 max-h-[400px] p-4 overflow-y-scroll text-[var(--foreground)]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
            cum sociis natoque penatibus et magnis dis parturient montes. Lacus
            vestibulum sed arcu non odio euismod lacinia at. Orci phasellus
            egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
            Convallis aenean et tortor at risus viverra adipiscing at in. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Gravida cum
            sociis natoque penatibus et magnis dis parturient montes. Lacus
            vestibulum sed arcu non odio euismod lacinia at. Orci phasellus
            egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
            Convallis aenean et tortor at risus viverra adipiscing at in.
          </p>
          <p className="mt-4">
            Vestibulum sed arcu non odio. Blandit volutpat maecenas volutpat
            blandit aliquam etiam. Et malesuada fames ac turpis egestas sed.
            Pharetra diam sit amet nisl. Aliquam sem fringilla ut morbi
            tincidunt augue interdum. Faucibus nisl tincidunt eget nullam non.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
            cum sociis natoque penatibus et magnis dis parturient montes. Lacus
            vestibulum sed arcu non odio euismod lacinia at. Orci phasellus
            egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
            Convallis aenean et tortor at risus viverra adipiscing at in. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Gravida cum
            sociis natoque penatibus et magnis dis parturient montes. Lacus
            vestibulum sed arcu non odio euismod lacinia at. Orci phasellus
            egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
            Convallis aenean et tortor at risus viverra adipiscing at in.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
            cum sociis natoque penatibus et magnis dis parturient montes. Lacus
            vestibulum sed arcu non odio euismod lacinia at. Orci phasellus
            egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
            Convallis aenean et tortor at risus viverra adipiscing at in. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Gravida cum
            sociis natoque penatibus et magnis dis parturient montes. Lacus
            vestibulum sed arcu non odio euismod lacinia at. Orci phasellus
            egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
            Convallis aenean et tortor at risus viverra adipiscing at in.
          </p>
          <p className="mt-4">
            Vestibulum sed arcu non odio. Blandit volutpat maecenas volutpat
            blandit aliquam etiam. Et malesuada fames ac turpis egestas sed.
            Pharetra diam sit amet nisl. Aliquam sem fringilla ut morbi
            tincidunt augue interdum. Faucibus nisl tincidunt eget nullam non.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
            cum sociis natoque penatibus et magnis dis parturient montes. Lacus
            vestibulum sed arcu non odio euismod lacinia at. Orci phasellus
            egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
            Convallis aenean et tortor at risus viverra adipiscing at in. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Gravida cum
            sociis natoque penatibus et magnis dis parturient montes. Lacus
            vestibulum sed arcu non odio euismod lacinia at. Orci phasellus
            egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
            Convallis aenean et tortor at risus viverra adipiscing at in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageTextScrollComponent;
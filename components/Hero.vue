<template>
    <section
        class="relative h-dvh w-100 bg-no-repeat bg-cover bg-bottom bg-[url('https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg')]">
        
        <div class="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
        <div
            class="absolute bg-black max-h-fit bg-opacity-20 shadow-xl shadow-gray-950 rounded-xl my-auto inset-0 flex justify-center items-center flex-col py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1
                class="myText bg-gradient-to-r from-blue-600 via-red-500 to-fuchsia-500 bg-clip-text text-transparent  mb-4 text-4xl font-extrabold tracking-widest leading-none text-gray-900 md:text-5xl lg:text-6xl">
                Start your drive
            </h1>
            <SearchBar />
        </div>

    </section>
</template>

<style>
h1.myText{
    text-shadow: -1px 2px 6px oklch(0.73 0.31 336.66 / 0.3);
}
</style>


<template>
    <section
        class="relative h-dvh w-100 bg-no-repeat bg-cover bg-bottom bg-[url('https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg')]">
        
        <div class="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
        <div
            class="absolute bg-black max-h-fit bg-opacity-20 shadow-xl shadow-gray-950 rounded-xl my-auto inset-0 flex justify-center items-center flex-col py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1
                class="myText  mb-4 text-4xl font-extrabold tracking-widest leading-none text-gray-900 md:text-5xl lg:text-6xl">
                Start your drive
            </h1>
            <SearchBar />
        </div>

    </section>
</template>

<style>
h1.myText{
    position: relative;
    color: transparent;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
    background-clip: text;

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, .15);
        box-shadow: 0 0 20px 20px rgba(0, 0, 0, .15);
        /* background: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.2) 20%, transparent 100%); */
    }
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>


<template>
    <img
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        class="w-10 h-10 rounded-full cursor-pointer"
        :src="user?.user_metadata.picture"
        alt="User dropdown" />

    <!-- Dropdown menu -->
    <div
        id="userDropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{{user!.user_metadata.name}}</div>
            <div class="font-medium truncate">{{user?.email}}</div>
        </div>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Dashboard</a
                >
            </li>
            <!-- <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Settings</a
                >
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Earnings</a
                >
            </li> -->
        </ul>
        <div class="py-1">
            <button
                @click="logout"
                class="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Sign out</button
            >
        </div>
    </div>
</template>

<script lang="ts" setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.error(error)
    }
    navigateTo('/')
}
</script>

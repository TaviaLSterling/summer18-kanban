<div class="card-action">
        <form @submit.prevent="addTask">
            <input type="text" placeholder="title" v-model="newTask.title" required>
            <input type="text" placeholder="description" v-model="newTask.description">
            <button type="submit">Create Task</button>
          </form>
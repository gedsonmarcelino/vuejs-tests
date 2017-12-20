<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User {{name}}!</p>
        <p>Age: {{age}}!</p>
        <button @click="changeName">Change User Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :name="name"
                    :age="age"
                    :resetFn="resetFn"
                    @wasResetName="name = $event"
                    ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :age="age"
                    @wasAgeEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Ged',
                age: 29
            }
        },
        methods: {
            changeName(){
                this.name = 'Pri';
            },
            resetFn(){
                this.name = 'Ged';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>

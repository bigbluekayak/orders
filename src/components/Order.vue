<template>
    <div>
        <form @submit.prevent="addOrder" class="mb-3">
      <div v-if="error" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h4 class="alert-heading">Error!</h4>
        <p class="mb-0">{{error}}</p>
      </div>
      <div class="form-group">
        <label for="name">Nname</label>
        <input
          v-model="order.name"
          type="text"
          class="form-control"
          id="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="order.email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Email" required>
      </div>
     
      <button type="submit" class="btn btn-primary">Order</button>
    </form>
    </div>
</template>

<script>
    const API_URL = "/api/order";
    
    export default {
        name: 'Order',
        data: () => ({
            error: '',
            order: {
                name: '',
                email: ''
            }
        }),
        methods: {
            addOrder() {
                console.log(this.order),
                fetch(API_URL, {
                    method: 'POST',
                    body: JSON.stringify(this.order),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(result => {
                    if(result.details){
                        const error = result.details
                            .map(detail => detail.message)
                            .join('. ');
                        this.error = error;
                    } else {
                        this.error = '';
                    }
                })
            }
        }
    }
</script>
<template>
  <div>
    <!-- form to add new client data -->
    <!-- make the form responsive below 360px -->
    <form class="bg-white shadow-lg p-8 mb-4">
      <h1
        class="
          text-center text-gray-800 text-2xl
          md:text-2xl
          py-2
          md:py-4
          font-bold
        "
      >
        Add New Client Data
      </h1>

      <div class="md:flex">
        <div>
          <div class="md:flex md:items-center mb-3">
            <div class="md:w-1/3">
              <label class="form-label-1" for="inline-full-name">
                Company Name
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="form-input-1" id="inline-full-name" type="text" />
            </div>
          </div>

          <div class="md:flex md:items-center mb-3">
            <div class="md:w-1/3">
              <label class="form-label-1" for="inline-full-name">
                Company Website
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="form-input-1" id="inline-full-name" type="text" />
            </div>
          </div>

          <div class="md:flex md:items-center mb-3">
            <div class="md:w-1/3">
              <label class="form-label-1" for="inline-full-name">
                Company Address
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="form-input-1" id="inline-full-name" type="text" />
            </div>
          </div>

          <div class="md:flex md:items-center mb-3">
            <div class="md:w-1/3">
              <label class="form-label-1" for="inline-full-name">
                Owner Name
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="form-input-1" id="inline-full-name" type="text" />
            </div>
          </div>

          <div class="md:flex md:items-center mb-3">
            <div class="md:w-1/3">
              <label class="form-label-1" for="inline-full-name">
                Contact Name
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="form-input-1" id="inline-full-name" type="text" />
            </div>
          </div>
        </div>

        <div>
          <div class="md:flex md:items-center mb-3">
            <div class="md:w-1/3">
              <label class="form-label-1" for="inline-full-name">
                Contact Email
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="form-input-1" id="inline-full-name" type="email" />
            </div>
          </div>

          <div class="md:flex md:items-center mb-3">
            <div class="md:w-1/3">
              <label class="form-label-1" for="inline-full-name">
                Contact Phone
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="form-input-1" id="inline-full-name" type="text" />
            </div>
          </div>

          <div class="md:flex md:items-center mb-3">
            <div class="md:w-1/3">
              <label class="form-label-1" for="inline-full-name">
                Source of Info
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="form-input-1" id="inline-full-name" type="text" />
            </div>
          </div>

          <div class="md:flex md:items-center mb-3">
            <div class="md:w-1/3">
              <label class="form-label-1" for="inline-full-name">
                Link to Source
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="form-input-1" id="inline-full-name" type="text" />
            </div>
          </div>

          <div class="md:flex md:items-center mb-3">
            <div class="md:w-1/3">
              <label class="form-label-1" for="inline-full-name">
                Client Problem
              </label>
            </div>
            <div class="md:w-2/3">
              <textarea
                class="form-input-1"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-around">
        <button
          class="
            px-4
            py-2
            text-xl
            bg-blue-600
            hover:bg-blue-700
            font-bold
            text-white
            my-2
            rounded-lg
          "
        >
          submit client info
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddClientDataForm",
  data() {
    return {};
  },
};
</script>

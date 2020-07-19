


// (function() {

//     function addSeparator(nStr) {
//         nStr += '';
//         var x = nStr.split('.');
//         var x1 = x[0];
//         var x2 = x.length > 1 ? '.' + x[1] : '';
//         var rgx = /(\d+)(\d{3})/;
//         while (rgx.test(x1)) {
//             x1 = x1.replace(rgx, '$1' + '.' + '$2');
//         }
//         return x1 + x2;
//     }

//     function rangeInputChangeEventHandler(e){
//         var rangeGroup = $(this).attr('name'),
//             minBtn = $(this).parent().children('.min'),
//             maxBtn = $(this).parent().children('.max'),
//             range_min = $(this).parent().children('.range_min'),
//             range_max = $(this).parent().children('.range_max'),
//             minVal = parseInt($(minBtn).val()),
//             maxVal = parseInt($(maxBtn).val()),
//             origin = $(this).context.className;

//         if(origin === 'min' && minVal > maxVal-5){
//             $(minBtn).val(maxVal-5);
//         }
//         var minVal = parseInt($(minBtn).val());
//         $(range_min).html(addSeparator(minVal*1000) + ' €');


//         if(origin === 'max' && maxVal-5 < minVal){
//             $(maxBtn).val(5+ minVal);
//         }
//         var maxVal = parseInt($(maxBtn).val());
//         $(range_max).html(addSeparator(maxVal*1000) + ' €');
//     }

//  $('input[type="range"]').on( 'input', rangeInputChangeEventHandler);
// })();

// (function() {

//   function addSeparator(nStr) {
//       nStr += '';
//       var x = nStr.split('.');
//       var x1 = x[0];
//       var x2 = x.length > 1 ? '.' + x[1] : '';
//       var rgx = /(\d+)(\d{3})/;
//       while (rgx.test(x1)) {
//           x1 = x1.replace(rgx, '$1' + '.' + '$2');
//       }
//       return x1 + x2;
//   }

//   function rangeInputChangeEventHandler(e){
//       var rangeGroup = $(this).attr('name'),
//           minBtn = $(this).parent().children('.min'),
//           maxBtn = $(this).parent().children('.max'),
//           range_min = $(this).parent().children('.range_min'),
//           range_max = $(this).parent().children('.range_max'),
//           minVal = parseInt($(minBtn).val()),
//           maxVal = parseInt($(maxBtn).val()),
//           origin = $(this).context.className;

//       if(origin === 'min' && minVal > maxVal-2){
//           $(minBtn).val(maxVal-2);
//       }
//       var minVal = parseInt($(minBtn).val());
//       $(range_min).html(addSeparator(minVal) );


//       if(origin === 'max' && maxVal-2 < minVal){
//           $(maxBtn).val(2+ minVal);
//       }
//       var maxVal = parseInt($(maxBtn).val());
//       $(range_max).html(addSeparator(maxVal) );
//   }

// $('input[type="range"]').on( 'input', rangeInputChangeEventHandler);
// })();


/* <form action="/explore" method="GET" class="item form-inline">
    <div class="container ">
        <!-- <input type="text" name="fullName" placeholder="search fullName" class="form-control"> -->
        <!-- <button type="submit" class="btn btn-primary">Search</button> -->

        <input type="text" name="username" placeholder="search username" class="form-control">
                <!-- <button type="submit" class="btn btn-primary">Search</button> -->

        <h1 style="text-align: center;">Explore Page</h1>
                <div class="row text-center d-flex justify-content-around" style="display:flex; flex-wrap: wrap;">
                    <% foundUser.forEach(function(User){ %>
                        <div class="col-md-3 col-sm-6">
                            <div class="card" style="width: 18rem;">
                                <img src="<%= User.image %>" class="card-img-top" alt="Img Not found">
                                    <div class="card-body">
                                        <h5 class="card-title" text-align center><%= User.firstName %> <%= User.lastName %></h5>
                                        <p class="card-text"><%= User.username %> <%= User.age %> <%= User.city %> </p>
                                        <p class="card-text"><%= User.bio %></p>
                                        <a href="/profile/<%= User._id%>" class="btn btn-primary">View Profile</a>
                                    </div>
                    </div>
                            </div>
                            <% }); %>
                <div class="container">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <div>
                                            <label class="col-form-label-lg">Your Preferred Sexuality</label>
                                            <select name="sexuality" id="sexuality" class="form-group">
                                                <option selected disabled value="">Select Your Sexuality</option>
                                                <option value="Straight">Straight</option>
                                                <option value="Gay">Gay</option>
                                                <option value="Lesbian">Lesbian</option>
                                                <option value="Bisexual">Bisexual</option>
                                            </select>
                                            <!-- <button type="submit" class="btn btn-primary">Search</button> -->
                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 col-sm-6" >
                                        <label class="col-form-label-lg">Your Preferred Gender</label>
                                        <select name="gender" class="form-group">
                                            <option selected disabled value="">Select Your Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </select>
                                        <!-- <button type="submit" class="btn btn-primary">Search</button> -->
            </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="form-group col-12 col-sm-4 pl-5 ml-5">
                                        <div class="input-group pl-2">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="addon-wrapping"><i class="fas fa-map-marker-alt"></i></span>
                                            </div>
                                            <select name="city" class="form-control" aria-label="City " aria-describedby="addon-wrapping">
                                                <option selected disabled value="" >Select City </option>
                                                <% for (var i = 0; i < indianCities.length; { %>
                                                    <option><%= indianCities[i]%></option>
                                                    <% } %>
                    </select>

                                            <div class="row">
                                                <div class="col">
                                                    <div class="rangeslider">
                                                        <input class="min" name="age" type="range" min="16" max="75" value="16" />
                                                        <input class="max" name="age" type="range" min="16" max="75" value="75" />
                                                        <span class="range_min light left">16</span>
                                                        <span class="range_max light right">75</span>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-reverse">
                                <div class="col">
                                    <button type="submit" class="btn btn-primary">Apply filters</button>
                                    <a href="explore" class="btn btn-danger">Remove filter</a>
                                </div>
                            </div>



                        </div>

</div>
</div>
</form> */
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      id="bootstrap-css"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <script
      src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
      integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <table class="table table-hover" id="myTable">
            <thead>
              <tr>
                <th scope="col" class="text-center">#</th>
                <th scope="col">Input</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr id="1">
                <td class="index">1</td>
                <td class="indexInput">
                  <input type="text" name="abc" id="index" value="1" />
                </td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr id="2">
                <td class="index">2</td>
                <td class="indexInput">
                  <input type="text" name="abc" id="index" value="2" />
                </td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr id="3">
                <td class="index">3</td>
                <td class="indexInput">
                  <input type="text" name="abc" id="index" value="3" />
                </td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </body>
  <script>
    var fixHelperModified = function(e, tr) {
        var $originals = tr.children();
        var $helper = tr.clone();
        $helper.children().each(function(index) {
          $(this).width($originals.eq(index).width());
        });
        return $helper;
      },
      updateIndex = function(e, ui) {
        $("td.index", ui.item.parent()).each(function(i) {
          $(this).html(i + 1);
        });
        $("input[type=text]", ui.item.parent()).each(function(i) {
          $(this).val(i + 1);
        });
      };

    $("#myTable tbody")
      .sortable({
        helper: fixHelperModified,
        stop: updateIndex
      })
      .disableSelection();

    $("tbody").sortable({
      distance: 5,
      delay: 100,
      opacity: 0.6,
      cursor: "move",
      update: function() {}
    });
  </script>
  <style>
    td:hover {
      cursor: move;
    }
  </style>
</html>

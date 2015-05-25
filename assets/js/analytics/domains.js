$(document).ready(function () {

  $.get("/assets/data/tables/analytics/domains.json", function(data) {
    renderTable(data.data);
  });

  var names = {
    dap: {
      0: "No",
      1: "Yes"
    }
  };

  var display = function(set) {
    return function(data, type) {
      if (type == "sort")
        return data;
      else
        return set[data.toString()];
    }
  };

  var renderTable = function(data) {
    $("table").DataTable({

      responsive: true,

      data: data,

      columns: [
        {data: "Domain", width: "210px"},
        {data: "Participates in DAP?"}
      ],

      columnDefs: [
        {render: display(names.dap), targets: 1}
      ],

      "oLanguage": {
        "oPaginate": {
          "sPrevious": "<<",
          "sNext": ">>"
        }
      }

    });
  };

});

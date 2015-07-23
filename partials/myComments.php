<div ng-controller = "myCommentsCtrl" class = "text-block">

	<h4> Comentariile mele </h4>
	<br />

	<table class = "table table-striped">
		<thead>
			<tr> <th style = "min-width: 100px; text-align: center;"> # </th> <th> Comentariu </th> </tr>
		</thead>
		<tbody>
			<tr ng-repeat = "essay in essays track by $index">
				<td style = "min-width: 100px; text-align: center;"> {{essay.index + 1}} </td>
				<td ng-bind-html = "essay.content | to_trusted"></td>
			</tr>
		</tbody>
	</table>


</div>
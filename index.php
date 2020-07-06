
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php"); ?>

<?
$users = CUser::GetList(($by = 'id'), ($order = 'desc'));
$parsedUsers = json_encode($users);
$command = 'rm -rf build || rd /s /q build && npm run build'; ?>

<div hidden>
<?// system($command); ?>
</div>
<script>
    let users = [];
    <? while ($entry = $users->Fetch()) {
    echo 'users.push(["'. $entry["LOGIN"] .'","'. $entry["NAME"] .'", "'. $entry["LAST_NAME"] .'", "'. $entry["SECOND_NAME"]. '", "' .$entry["WORK_POSITION"]. '", "' .$entry["WORK_DEPARTMENT"]. '"]);'; } ?>
</script>
<?
require($_SERVER["DOCUMENT_ROOT"] . "/local/employees_list/public/index.html");
?>

<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>

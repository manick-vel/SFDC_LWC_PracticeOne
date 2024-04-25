public class AccountController {
    
    //Public List<Id> accountIds;

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        List<Account> accountList = [
                SELECT
                Id, Name, Industry, AnnualRevenue,
                (SELECT Id, Name FROM Contacts)
                FROM Account
        ];

        return accountList;

        //accountIds = accountList.map(&:id);
    }

    // public String contactsInfo(String accountIds){
    //     List<Contacts> contactList = [
    //         SELECT Id, Name FROM Contact WHERE accountId IN :accountIds
    //     ]

    //     String account
    // }
}
 package io.ionic.starter;
  import android.content.Intent;
 import android.os.Bundle;
 import co.boundstate.BranchDeepLinks;
 import com.getcapacitor.BridgeActivity;
 import com.getcapacitor.Plugin;
 import java.util.ArrayList;
 import io.branch.referral.Branch;

public class MainActivity extends BridgeActivity {


  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
   registerPlugin(BranchDeepLinks.class);
  }

  @Override
  protected void onNewIntent(Intent intent) {
    this.setIntent(intent);
    super.onNewIntent(intent);
 }
}
